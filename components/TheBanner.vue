<template>
    <div class="bg-slate-800">
        <div class="h-2 bg-gradient-to-r from-indigo-500 to-pink-500 bg-origin-border"></div>

        <div class="w-full py-3 flex items-center justify-center">
            <p class="font-medium text-white text-sm">
                Currently in Beta 🌸🌸
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                latestVersion: this.$config.latestVersion,
            }
        },
    }
</script>