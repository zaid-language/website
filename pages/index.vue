<template>
    <div class="space-y-32">
        <div class="relative lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div class="relative">
                <h3 class="border-0 text-3xl mt-2 leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl sm:leading-10 p-0">
                    A small, class-based programming language that's a joy to use.
                </h3>

                <ul class="mt-10 p-0 list-none">
                    <li>
                        <div class="flex">
                            <div class="flex-shrink-0">
                                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="ml-4">
                                <h4 class="mb-1 text-lg py-0 leading-6 font-medium text-slate-900">
                                    Embeddable
                                </h4>
                                <p class="pt-0 text-base leading-6 text-slate-600">
                                    Extend and build applications in <span class="border-b-2 border-cyan-500">Go</span> utilizing <span class="border-b-2 border-indigo-500">Zaidlang</span> as your scripting language.
                                </p>
                            </div>
                        </div>
                    </li>

                    <li class="mt-10">
                        <div class="flex">
                            <div class="flex-shrink-0">
                                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd"></path></svg>
                                </div>
                            </div>
                            <div class="ml-4">
                                <h4 class="mb-1 text-lg py-0 leading-6 font-medium text-slate-900">
                                    Small
                                </h4>
                                <p class="pt-0 text-base leading-6 text-slate-600">
                                    Zaidlang maintains a small footprint (less than 10 MB), making it portable and great for single-board computers.
                                </p>
                            </div>
                        </div>
                    </li>

                    <li class="mt-10">
                        <div class="flex">
                            <div class="flex-shrink-0">
                                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path></svg>
                                </div>
                            </div>
                            <div class="ml-4">
                                <h4 class="mb-1 text-lg py-0 leading-6 font-medium text-slate-900">
                                    Class-based
                                </h4>
                                <p class="pt-0 text-base leading-6 text-slate-600">
                                    Zaidlang places classes front and center, fully embracing object-oriented programming.
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="mt-10 relative lg:mt-0">
                <ExampleCode />
            </div>
        </div>

        <div class="bg-gradient-to-r from-slate-800 to-slate-900 bg-origin-border rounded-md">
            <div class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <h2 class="text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl">
                    <span class="block">Ready to dive in?</span>
                    <span class="block">Get started with our documentation.</span>
                </h2>

                <div class="mt-8 flex justify-center">
                    <div class="inline-flex rounded-md shadow">
                        <a href="https://zaidlang.gitbook.io/z/getting-started" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border hover:bg-indigo-700">
                            Get started
                        </a>
                    </div>

                    <div class="ml-3 inline-flex">
                        <a href="https://zaidlang.gitbook.io/z/language/syntax" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200">
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <h2 class="text-2xl tracking-tight font-extrabold text-slate-900 mt-10 mb-8">Get Involved</h2>

            <ul class="grid sm:grid-cols-2 gap-4">
                <li>
                    <a href="http://github.com/zaid-language" class="flex items-start space-x-4 rounded-md hover:bg-slate-50 p-3 hover:shadow-sm">
                        <svg fill="currentColor" class="flex-none text-slate-900 w-12 h-12"><rect width="48" height="48" rx="12"></rect><path d="M23.997 12a12 12 0 00-3.792 23.388c.6.12.816-.264.816-.576l-.012-2.04c-3.336.72-4.044-1.608-4.044-1.608-.552-1.392-1.332-1.764-1.332-1.764-1.08-.744.084-.72.084-.72 1.2.084 1.836 1.236 1.836 1.236 1.08 1.824 2.808 1.296 3.492.996.12-.78.42-1.308.756-1.608-2.664-.3-5.46-1.332-5.46-5.928 0-1.32.468-2.388 1.236-3.228a4.32 4.32 0 01.12-3.168s1.008-.324 3.3 1.224a11.496 11.496 0 016 0c2.292-1.56 3.3-1.224 3.3-1.224.66 1.644.24 2.88.12 3.168.768.84 1.236 1.92 1.236 3.228 0 4.608-2.808 5.616-5.484 5.916.432.372.816 1.104.816 2.22l-.012 3.3c0 .312.216.696.828.576A12 12 0 0023.997 12z" fill="currentColor" class="text-slate-50"></path></svg>
                        <div class="flex-auto">
                            <h3 class="font-bold text-slate-900">
                                GitHub
                            </h3>
                            <p class="text-slate-500">Clone, fork, review, download and contribute to Zaidlang's source code.</p>
                        </div>
                    </a>
                </li>

                <li>
                    <a href="http://instagram.com/zaid___lang" class="flex items-start space-x-4 rounded-md hover:bg-slate-50 p-3 hover:shadow-sm">
                        <svg fill="currentColor" class="flex-none w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><linearGradient id="a" x1="255.531" x2="255.531" y1="117.176" y2="406.065" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ea8928"/><stop offset="1" stop-color="#cf2b8f"/></linearGradient><path fill="url(#a)" d="M326.1 104.1H185c-47.9 0-86.9 39-86.9 86.9v141c0 47.9 39 86.9 86.9 86.9h141c47.9 0 86.9-39 86.9-86.9V191c0-47.9-38.9-86.9-86.8-86.9zm58.9 228c0 32.5-26.4 58.9-58.9 58.9H185c-32.5 0-58.9-26.4-58.9-58.9V191c0-32.5 26.4-58.9 58.9-58.9h141c32.5 0 58.9 26.4 58.9 58.9l.1 141.1z"/><linearGradient id="b" x1="255.531" x2="255.531" y1="117.176" y2="406.065" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ea8928"/><stop offset="1" stop-color="#cf2b8f"/></linearGradient><path fill="url(#b)" d="M255.5 180.4c-44.7 0-81.1 36.4-81.1 81.1 0 44.7 36.4 81.1 81.1 81.1s81.1-36.4 81.1-81.1c0-44.7-36.3-81.1-81.1-81.1zm0 134.3c-29.3 0-53.2-23.9-53.2-53.2 0-29.3 23.9-53.2 53.2-53.2s53.2 23.9 53.2 53.2c0 29.4-23.8 53.2-53.2 53.2z"/><linearGradient id="c" x1="340.043" x2="340.043" y1="117.176" y2="406.065" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ea8928"/><stop offset="1" stop-color="#cf2b8f"/></linearGradient><path fill="url(#c)" d="M340 156.7c-5.4 0-10.7 2.2-14.5 6-3.8 3.8-6 9.1-6 14.5s2.2 10.7 6 14.5c3.8 3.8 9.1 6 14.5 6s10.7-2.2 14.5-6c3.8-3.8 6-9.1 6-14.5s-2.2-10.7-6-14.5c-3.8-3.8-9.1-6-14.5-6z"/></svg>
                        <div class="flex-auto">
                            <h3 class="font-bold text-slate-900">
                                Instagram
                            </h3>
                            <p class="text-slate-500">Follow the Zaidlang Instagram account for news and updates.</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {}
</script>
