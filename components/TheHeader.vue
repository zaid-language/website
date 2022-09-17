<template>
    <header>
        <TheBanner />

        <div class="bg-white border-b border-gray-200">
            <div class="max-w-8xl mx-auto px-4 sm:px-8">
                <div class="flex justify-between items-center h-16 md:space-x-10">
                    <div class="flex w-72">
                        <a href="/" class="flex-shrink-0 flex items-center" alt="Home">
                            <img class="block lg:hidden h-5 w-auto" src="/img/logo-zaid.png" alt="Zaidlang" />
                            <img class="hidden lg:block h-10 w-auto" src="/img/zaidlang.png" alt="Zaidlang" />
                        </a>
                    </div>

                    <div class="-mr-2 -my-2 md:hidden">
                        <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false" @click.prevent="open" ref="mobilebtn">
                            <span class="sr-only">Open menu</span>

                            <!-- Heroicon name: outline/menu -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </button>
                    </div>

                    <nav class="zaid-header hidden md:flex h-full lg:space-x-4">

                        <a href="https://zaidlang.gitbook.io/z/language" target="_blank" class="inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700">
                            Documentation
                        </a>

                        <a href="https://zaidlang.gitbook.io/z/getting-started" target="_blank" class="inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700">
                            Download
                        </a>
                    </nav>
                </div>
            </div>
        </div>

        <TheMobileMenu />
    </header>
</template>

<script>
    export default {
        methods: {
            open() {
                console.log('opening...')
                $nuxt.$emit('open-nav')
            },

            close() {
                console.log('closing...')
                $nuxt.$emit('close-nav')
            }
        }
    }
</script>
