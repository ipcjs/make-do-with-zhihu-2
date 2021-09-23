declare module '*.scss' {
    type STRING = string
    const STRING = 'this is a css style string.'
    // 似乎需要同时导出一个类型和一个值。。。
    export default STRING
}