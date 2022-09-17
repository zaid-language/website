<template>
    <div class="w-full my-6">
        <div class="p-2 rounded border border-gray-200 shadow sm:p-3" :class="{ 'bg-gray-800 text-gray-100': secondary, 'bg-indigo-100 text-indigo-900': info, 'bg-red-100 text-red-900': danger }">
            <div class="flex items-center justify-between flex-wrap">
                <div class="w-0 flex-1 flex">
                    <span class="flex ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13 7H7v6h6V7z" />
                            <path fill-rule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clip-rule="evenodd" />
                        </svg>
                    </span>

                    <span class="pl-3 sm:pl-4 text-sm leading-tight my-auto">
                        <slot></slot>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            secondary: {
                type: Boolean,
                default: false,
                required: false,
            },

            info: {
                type: Boolean,
                default: false,
                required: false,
            },

            danger: {
                type: Boolean,
                default: false,
                required: false,
            }
        },
    }
</script>