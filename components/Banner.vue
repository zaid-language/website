<template>
    <div class="w-full my-6">
        <div class="p-2 rounded border border-gray-200 shadow sm:p-3" :class="{ 'bg-gray-800 text-gray-100': secondary, 'bg-indigo-100 text-indigo-900': info, 'bg-red-100 text-red-900': danger }">
            <div class="flex items-center justify-between flex-wrap">
                <div class="w-0 flex-1 flex">
                    <span class="text-sm leading-tight my-auto mx-auto">
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