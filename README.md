# Make Do with zhihu 2

Make Do with zhihu 2

## Install

## Develop

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
