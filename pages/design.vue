<template>
    <div>
        <div class="divide-y divide-slate-200">
            <div class="pt-6 pb-8 space-y-2 md:space-y-5 bg-slate-900 p-6 rounded-lg mb-10">
                <h1 class="text-3xl leading-9 font-extrabold text-slate-100 tracking-tight sm:leading-10 md:leading-14">
                    Design Kit
                </h1>

                <p class="text-lg leading-7 text-slate-300">Grab and reference the various design elements that make up Zaidlang's branding.</p>
            </div>
        </div>

        <article class="prose prose-slate max-w-none">
            <h2>Primary colors</h2>
            <p>Our colors are inspired by modern cyberpunk aesthetics that are pleasing in both light and dark color schemes. Images of <a href="https://www.liamwong.com/" target="_blank">Tokyo at night</a> race through our minds.</p>

            <div class="grid grid-cols-2 py-4 gap-6">
                <div>
                    <div class="w-full h-32 rounded-lg bg-indigo-500"></div>

                    <div class="pt-4 font-semibold">Indigo</div>
                    <div>#6366F1</div>
                    <div>RGB: 79 73 237</div>
                </div>

                <div>
                    <div class="w-full h-32 rounded-lg bg-cyan-500"></div>

                    <div class="pt-4 font-semibold">Cyan</div>
                    <div>#06B6D4</div>
                    <div>RGB: 22 167 201</div>
                </div>

                <div>
                    <div class="w-full h-32 rounded-lg bg-white border-4 border-slate-200"></div>

                    <div class="pt-4 font-semibold">White</div>
                    <div>#FFFFFF</div>
                    <div>RGB: 255 255 255</div>
                </div>

                <div>
                    <div class="w-full h-32 rounded-lg bg-slate-900"></div>

                    <div class="pt-4 font-semibold">Black</div>
                    <div>#0F172A</div>
                    <div>RGB: 14 18 32</div>
                </div>
            </div>

            <h2>Typography</h2>
            <p>We use the <b>Inter</b> font family becase it's a beautiful font for UI design, easy on the eyes and completely open-source and free.</p>

            <div class="grid grid-cols-1 md:grid-cols-2 py-4 gap-6">
                <div>
                    <div class="w-full p-8 rounded-lg bg-slate-100">
                        <div class="flex justify-end mb-10 items-center">
                            <div class="rounded-md bg-slate-900 shadow w-8 h-8 mr-3"></div>
                            <span class="text-xs">#0F172A</span>
                        </div>

                        <div class="space-y-3 md:space-y-6">
                            <div class="flex justify-between">
                                <span class="text-xl font-light">Inter Light</span>
                                <span class="text-xl font-light">300</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-xl">Inter Regular</span>
                                <span class="text-xl">400</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-xl font-semibold">Inter Semi Bold</span>
                                <span class="text-xl font-semibold">600</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-xl font-bold">Inter Bold</span>
                                <span class="text-xl font-bold">700</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="w-full p-8 rounded-lg bg-slate-900 text-slate-100">
                        <div class="flex justify-end mb-10 items-center">
                            <div class="rounded-md bg-slate-100 shadow w-8 h-8 mr-3"></div>
                            <span class="text-xs">#F1F5F9</span>
                        </div>

                        <div class="space-y-3 md:space-y-6">
                            <div class="flex justify-between">
                                <span class="text-xl font-light">Inter Light</span>
                                <span class="text-xl font-light">300</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-xl">Inter Regular</span>
                                <span class="text-xl">400</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-xl font-semibold">Inter Semi Bold</span>
                                <span class="text-xl font-semibold">600</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-xl font-bold">Inter Bold</span>
                                <span class="text-xl font-bold">700</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
    export default {
    }
</script>
