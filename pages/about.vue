<template>
    <div class="divide-y divide-slate-200">
        <div class="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1 class="text-3xl leading-9 font-extrabold text-slate-900 tracking-tight sm:leading-10 md:leading-14">
                About
            </h1>

            <p class="text-lg leading-7 text-slate-500">A small, class-based programming language that's a joy to use.</p>
        </div>

        <!-- <div class="min-w-0 w-full flex-auto">
            <article class="prose prose-slate">
                <NuxtContent :document="page" />
            </article>
        </div> -->
    </div>
</template>

<script>
    export default {
        // async asyncData({ $content }) {
        //     const page = await $content('pages', 'about').fetch()

        //     return { page }
        // }
    }
</script>
