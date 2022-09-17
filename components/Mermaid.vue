<template>
    <!-- <div class="mermaid">
        <slot></slot>
    </div> -->
    <div class="w-full my-6">
        <div class="p-2 sm:p-6 text-sm">
            <div class="flex items-center justify-between flex-wrap">
                <div class="w-0 flex-1 flex items-center">
                    <span class="mermaid mx-auto">
                        <slot></slot>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            import("mermaid/dist/mermaid").then(mermaid => {
                mermaid.initialize({
                    startOnLoad: true
                })

                mermaid.init()
            })
        }
    }
</script>