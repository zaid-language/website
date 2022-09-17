export default async function ({ store }) {
    if (process.server || process.static) {
        // await store.dispatch('fetchCategories')

        if (process.env.NODE_ENV === "production") {
            await store.dispatch('fetchReleases')
        }
    }

    // SPA support
    // if (process.client && store.state.categories.length == 0) {
    //     await store.dispatch('fetchCategories')
    // }

    if (process.client && store.state.releases.length == 0 && process.env.NODE_ENV === "production") {
        await store.dispatch('fetchReleases')
    }

    // Hot reload support
    // if (process.client && process.dev) {
    //     window.onNuxtReady(() => {
    //         window.$nuxt.$on('content:update', async () => {
    //             await store.dispatch('fetchCategories')
    //         })
    //     })
    // }
}
