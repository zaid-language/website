import filter from 'lodash.filter'

export default {
    methods: {
        focusTrap(element) {
            const keyboardHandler = (event) => {
                if (event.keyCode === 9 || event.key === 'tab') {
                    focus(event)
                }
            }

            element.addEventListener('keydown', keyboardHandler)

            return () => {
                if (keyboardHandler) {
                    element.removeEventListener('keydown', keyboardHandler)
                }
            }

            function focus(e) {
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
                let focusableItems = element.querySelectorAll(focusableStr)
                let focusedItemIndex

                focusableItems = filter(focusableItems, (item) => {
                    const style = window.getComputedStyle(item)
                    return style.visibility !== 'hidden' && style.display !== 'none' && !item.classList.contains('disabled') && item.offsetWidth > 0 && item.offsetHeight > 0
                })

                if (focusableItems.length) {
                    focusedItemIndex = focusableItems.indexOf(document.activeElement)

                    if (e && e.shiftKey) {
                        // Back tab
                        if (focusedItemIndex < 0 || focusedItemIndex === 0) {
                            e.preventDefault()

                            const item = focusableItems[focusableItems.length - 1]
                            item.focus()
                        }
                    } else if (focusedItemIndex < 0 || focusedItemIndex === focusableItems.length - 1) {
                        if (e) {
                            e.preventDefault()
                        }
                        const item = focusableItems[0]
                        item.focus()
                    }
                } else {
                    element.focus()
                }
            }
        }
    }
}