export function applyStyle(css: string) {
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
}

export function performScript(code: string) {
    const script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.innerHTML = code
    document.head.appendChild(script)
}