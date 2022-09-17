<template>
    <div>
        <div class="text-center font-mono">go get <span class="text-indigo-400 font-bold">{{ project }}</span></div>
        <div class="text-center font-mono">{{ repository }}</div>
    </div>
</template>

<script>
    export default {
        layout: 'vanity',

        async asyncData({ params, $config }) {
            const project = params.project
            const repository = $config.projects[project]

            return {
                project,
                repository
            }
        },

        head() {
            return {
                title: `Zaidlang - go get ${this.project}`,
                meta: [
                    {
                        hid: "go-import",
                        name: "go-import",
                        content: `zaidlang.tech/x/${this.project} git ${this.repository}`
                    }
                ]
            }
        }
    }
</script>
