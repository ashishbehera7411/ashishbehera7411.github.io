(() => {
    const preventDefault = event => event.preventDefault();

    document.addEventListener('contextmenu', preventDefault);
    document.addEventListener('copy', preventDefault);
    document.addEventListener('cut', preventDefault);
    document.addEventListener('selectstart', preventDefault);
    document.addEventListener('dragstart', preventDefault);

    document.addEventListener('keydown', event => {
        const key = event.key.toLowerCase();
        const controlOrMeta = event.ctrlKey || event.metaKey;
        const devToolsShortcut = (event.ctrlKey && event.shiftKey && ['i', 'j', 'c', 'k'].includes(key))
            || (event.metaKey && event.altKey && ['i', 'j', 'c'].includes(key));
        const blockedShortcut = controlOrMeta && ['a', 'c', 'p', 's', 'u', 'x'].includes(key);

        if (event.key === 'F12' || devToolsShortcut || blockedShortcut) {
            preventDefault(event);
        }
    }, true);
})();
