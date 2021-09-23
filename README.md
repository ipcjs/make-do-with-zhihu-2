# Make Do with zhihu 2

[![GitHub release](https://img.shields.io/github/release/ipcjs/make-do-with-zhihu-2.svg)](https://github.com/ipcjs/make-do-with-zhihu-2/releases/latest)
[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/cocflgkidigfcdjghgghkapilhbnaocb.svg)](https://chrome.google.com/webstore/detail/make-do-with-zhihu-2/cocflgkidigfcdjghgghkapilhbnaocb)
[![Chrome Web Store Users](https://img.shields.io/chrome-web-store/users/cocflgkidigfcdjghgghkapilhbnaocb.svg)](https://chrome.google.com/webstore/detail/make-do-with-zhihu-2/cocflgkidigfcdjghgghkapilhbnaocb)

Make Do with zhihu 2（B乎凑合用2），将知乎的桌面网页版适配移动端样式，原本是个[脚本](https://greasyfork.org/zh-CN/scripts/374771-zhihu-mobile-style)，但脚本用起来太麻烦了，所以打包成了这个扩展。

## Install

## Develop

<details>
<summary>暂时无用的插件</summary>

一、安装依赖：

编译用到的插件[有点bug](https://github.com/extend-chrome/rollup-plugin-chrome-extension/issues/111), 需要手动修改下[这个文件](node_modules\rollup-plugin-chrome-extension\lib\index-cjs.js)：

```JavaScript
    const resources = [
      `${chunkFileNames
        .split('/')
        .join('/')
        .replace('[format]', '*')
        .replace('[name]', '*')
        .replace('[hash]', '*')}`,
      ...cache.contentScripts.map((x) =>
        // 改2803行，替换下路径分隔符
        path.relative(cache.srcDir, x).replace('\\', '/'),
      ),
    ];
```

</details>
