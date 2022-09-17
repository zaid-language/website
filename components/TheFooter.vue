<template>
    <footer class="bg-gradient-to-r from-slate-800 to-slate-900 bg-origin-border mt-32" aria-labelledby="footerHeading">
        <h2 id="footerHeading" class="sr-only">Footer</h2>

        <div class="max-w-8xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div class="pb-8 xl:grid xl:grid-cols-6 xl:gap-8">
                <div class="grid grid-cols-2 gap-8 xl:col-span-4">
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div class="mt-12 md:mt-0">
                            <h3 class="text-sm font-semibold text-slate-400 tracking-wider uppercase">
                                Resources
                            </h3>
                            <ul class="mt-4 space-y-4">
                                <li><a href="https://zaidlang.gitbook.io/z/language" class="text-base text-slate-300 hover:text-white">
                                    Documentation
                                </a></li>
                                <li><a href="https://zaidlang.gitbook.io/z/getting-started" class="text-base text-slate-300 hover:text-white">
                                    Download
                                </a></li>
                                <li><NuxtLink :to="`/design`" class="text-base text-slate-300 hover:text-white">
                                    Design Kit
                                </NuxtLink></li>
                            </ul>
                        </div>
                    </div>

                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 class="text-sm font-semibold text-slate-400 tracking-wider uppercase">
                                Ecosystem
                            </h3>
                            <ul class="mt-4 space-y-4">
                                <li><a href="https://marketplace.visualstudio.com/items?itemName=ZaidLanguage.zaid-language" class="text-base text-slate-300 hover:text-white">
                                    VSCode Extension
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="mt-12 xl:mt-0 xl:col-span-2">
                    <h3 class="text-sm font-semibold text-slate-400 tracking-wider uppercase">
                        Zaidlang
                    </h3>
                    <p class="text-base text-slate-300">
                        A small, class-based programming language. It's embeddable, light-weight, and a joy to use.
                    </p>
                </div>
            </div>

            <div class="border-t border-slate-700 pt-8 lg:flex lg:items-center lg:justify-between xl:mt-0">
                <div>
                    <p class="mt-2 text-base text-slate-300">
                    “[...] I am not an AI. My code name is Project 2501. I am a living, thinking entity that was created in the sea of information.”
                    </p>
                </div>
            </div>

            <div class="mt-8 border-t border-slate-700 pt-8 md:flex md:items-center md:justify-between">
                <p class="mt-8 text-base text-slate-400 md:mt-0 md:order-1">
                    &copy; {{ currentYear }}, MIT license
                </p>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        data() {
            return {
                defaultVersion: this.$config.defaultVersion.substring(1),
                highlights: [
                    {
                        name: 'Getting Started',
                        slug: 'getting-started',
                    },
                    {
                        name: 'Syntax',
                        slug: 'syntax',
                    },
                    {
                        name: 'Values',
                        slug: 'values',
                    },
                    {
                        name: 'Variables',
                        slug: 'variables',
                    },
                    {
                        name: 'Operators',
                        slug: 'operators',
                    },
                    {
                        name: 'Control Flow',
                        slug: 'control-flow',
                    },
                    {
                        name: 'Functions',
                        slug: 'functions',
                    },
                    {
                        name: 'Classes',
                        slug: 'classes',
                    },
                    {
                        name: 'Modules',
                        slug: 'modules',
                    }
                ]
            }
        },

        computed: {
            currentYear() {
                return new Date().getFullYear();
            }
        },
    }
</script>
