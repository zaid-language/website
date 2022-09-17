export default {
    methods: {
        focusFirst(element) {
            const focusableStr = [
                'a[href]',
                'area[href]',
                'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
                'select:not([disabled]):not([aria-hidden])',
                'textarea:not([disabled]):not([aria-hidden])',
                'button:not([disabled]):not([aria-hidden])',
                'iframe',
                'object',
                'embed',
                'video',
                'audio',
                '[contenteditable]',
                '[tabindex]:not([tabindex^="-"])'
            ].join(',')
            const focusable = element.querySelectorAll(focusableStr)
            if (focusable[0] && focusable[0].focus) focusable[0].focus()
        }
    }
}