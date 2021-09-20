import main from '../modules/packages/zhihu_mobile_style/src/main'
import '../modules/packages/zhihu_mobile_style/src/main.scss'
import nav from './nav'

main({ log: console.debug.bind(console) })

const script = document.createElement('script')
script.setAttribute('type', 'text/javascript')
script.innerHTML = `
Object.entries(${JSON.stringify(nav)}).forEach(([k, v]) => {
    Object.defineProperty(window.navigator, k, {
        value: v
    })
    console.log(window.navigator)
})
`
document.head.appendChild(script)
