import groupBy from 'lodash.groupby'

export const state = () => ({
    categories: {},
    releases: [],
})

export const getters = {
    getCategories(state) {
        return state.categories
    },

    getReleases(state) {
        return state.releases
    },

    getLatestRelease(state) {
        return state.releases[0]
    },
}

export const mutations = {
    SET_CATEGORIES(state, categories) {
        state.categories = categories
    },

    SET_RELEASES(state, releases) {
        state.releases = releases
    }
}

export const actions = {
    // async fetchCategories({ commit, state }) {
    //     // Avoid re-fetching in production
    //     if (process.dev === false && state.categories.length > 0) {
    //         return
    //     }

    //     const docs = await this.$content('docs', '1.0', { deep: true })
    //         .only([
    //             'title',
    //             'slug',
    //             'category',
    //         ])
    //         .sortBy('order', 'asc')
    //         .fetch()

    //     const categories = groupBy(docs, 'category')

    //     commit('SET_CATEGORIES', categories)
    // },

    async fetchReleases({ commit, state, getters }) {
        let github = 'zaid-language/zaidlang'
        let api = {
            repo: `https://api.github.com/repos/${github}`,
            releases: `https://api.github.com/repos/${github}/releases`
        }

        let options = {}
        let releases = []

        try {
            const data = await fetch(api.releases, options).then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }

                return response
            }).then(response => response.json())

            releases = data.filter(r => !r.draft).map((release) => {
                return {
                    name: (release.name || release.tag_name).replace('Release ', ''),
                    url: release.url,
                    date: release.published_at,
                    assets: release.assets,
                }
            })
        } catch (e) {
            console.error(e)
        }

        const getMajorVersion = r => r.name && Number(r.name.substring(1, 2))

        releases.sort((a, b) => {
            const aMajorVersion = getMajorVersion(a)
            const bMajorVersion = getMajorVersion(b)

            if (aMajorVersion !== bMajorVersion) {
                return bMajorVersion - aMajorVersion
            }

            return new Date(b.date) - new Date(a.date)
        })

        commit('SET_RELEASES', releases)
    }
}
