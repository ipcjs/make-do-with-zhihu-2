const url = chrome.runtime.getURL('src/content.js')
// import一下，让content.js在head加载完成后执行
import(url)