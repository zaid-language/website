<template>
    <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50" v-if="isOpen" id="nav-mobile" ref="mobilePanel" :aria-hidden="isOpen ? 'false' : 'true'" aria-modal="true">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div class="pt-5 pb-6 px-5">
                <div class="flex items-center justify-between">
                    <a href="/" class="flex-shrink-0 flex items-center" alt="Home">
                        <img class="h-10 w-auto" src="/img/zaidlang.png" alt="Zaidlang" />
                    </a>

                    <div class="-mr-2">
                        <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" @click.prevent="close">
                            <span class="sr-only">Close menu</span>

                            <!-- Heroicon name: outline/x -->
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <ul class="space-y-6 mt-6">
                    <li>
                        <a href="https://zaidlang.gitbook.io/z/language" class="hover:text-indigo-500">
                            Documentation
                        </a>
                    </li>

                    <li>
                        <a href="https://zaidlang.gitbook.io/z/getting-started" class="hover:text-indigo-500">
                            Download
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import { focusFirst, focusTrap } from '../mixins'

    export default {
        mixins: [focusTrap, focusFirst],

        data() {
            return {
                isOpen: false,
            }
        },

        watch: {
            $route(to, from) {
                this.close()
            }
        },

        methods: {
            toggle() {
                if (this.isOpen) {
                    this.close()
                } else {
                    this.open()
                }
            },

            open() {
                this.isOpen = true
                this.disableScroll()

                setTimeout(() => {
                    this.focusTrap(this.$refs.mobilePanel)
                    this.focusFirst(this.$refs.mobilePanel)
                }, 200)
            },

            close() {
                this.isOpen = false
                this.enableScroll()
                this.$parent.$refs.mobilebtn.focus()
            },

            enableScroll() {
                document.body.style.overflow = ''
                document.body.style.paddingRight = ''
            },

            disableScroll() {
                document.body.style.overflow = 'hidden'
                document.body.style.paddingRight = '0px'
            }
        },

        mounted() {
            const escape = (event) => {
                if (event.defaultPrevented) return

                switch (event.key) {
                    case 'Esc':
                    case 'Escape':
                        this.close()
                        break
                    default:
                        return
                }

                event.preventDefault()
            }

            document.addEventListener('keyup', escape)

            this.$nuxt.$on('close-nav', () => {
                this.close()
            })

            this.$nuxt.$on('open-nav', () => {
                this.open()
            })

            this.$on('hook:destroyed', () => {
                document.removeEventListener('keyup', escape)
                this.enableScroll()
            })
        },
    }
</script>
