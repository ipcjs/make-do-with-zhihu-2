#!/bin/bash
build_dirname='dist'
output_filename='md2'

function pack-to-crx() {
    name=$1

    CHROME=$(cygpath 'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe')
    KEY='C:\Users\ipcjs\Dropbox\JavaScript\crx\YAAW-for-Chrome.pem'
    DIR="C:\\GitHub\\make-do-with-zhihu-2\\$name"
    OUT_FILE="$output_filename.crx"

    "$CHROME" --pack-extension=$DIR --pack-extension-key=$KEY
    mv "$name.crx" $OUT_FILE
}
function build-script() {
    cd modules || exit
    npx rollup --config packages/zhihu_mobile_style/rollup.config.js
    cd ..
}

rm -Rf $build_dirname
npm run build

rm $output_filename.zip
7z a $output_filename.zip $build_dirname

pack-to-crx $build_dirname

build-script