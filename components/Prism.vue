<template>
    <div class="prism">
        <pre class="line-numbers relative mx-auto language-javascript rounded shadow text-sm bg-slate-800 p-6 text-slate-100" :class="`language-${lang}`"><code><slot></slot></code></pre>
    </div>
</template>

<script>
    import 'clipboard'
    import Prism from 'prismjs'
    import 'prismjs/components/prism-dart'
    import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard'

    export default {
        props: {
            lang: {
                type: String,
                default: 'dart'
            },
        },

        mounted() {
            Prism.highlightAll()
        }
    }
</script>
