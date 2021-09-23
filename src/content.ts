import main from '../modules/packages/zhihu_mobile_style/src/main'
import nav from './nav'
import { applyStyle, performScript } from './utils'
import css from '../modules/packages/zhihu_mobile_style/src/main.scss'

main({ log: console.debug.bind(console) })

applyStyle(css)

performScript(`
Object.entries(${JSON.stringify(nav)}).forEach(([k, v]) => {
    Object.defineProperty(window.navigator, k, {
        value: v
    })
    console.log(window.navigator)
})
`)

