// import { chromeExtension, simpleReloader } from 'rollup-plugin-chrome-extension'
import copy from 'rollup-plugin-copy'
import { emptyDir } from 'rollup-plugin-empty-dir'
import typescript from '@rollup/plugin-typescript'
import scss from 'rollup-plugin-scss'
import packageObj from './package.json'
import fs from 'fs-extra'


const plugins = [
    // chromeExtension(),
    // 生成的路径有问题，暂时不用
    // simpleReloader(),
    scss({
        output: false,
    }),
    typescript(),
    // emptyDir(),
]
const output_dir = 'dist'
// fs.emptyDir(output_dir)
// fs.rmSync(output_dir, { recursive: true, force: true })
const output_src = { dir: `${output_dir}/src`, format: 'es' }

const copy_targets = [
    { src: 'src/import-content.js', dest: output_src.dir },
    {
        src: 'manifest.json',
        dest: output_dir,
        transform: (contents, name) => {
            const manifest = JSON.parse(contents.toString())
            // manifest.name = packageObj.name
            manifest.description = packageObj.description
            manifest.version = packageObj.version
            return JSON.stringify(manifest, undefined, 4)
        },
    }
]

export default [
    {
        input: 'src/background.ts',
        output: output_src,
        plugins: [
            ...plugins,
        ],
    },
    {
        input: 'src/content.ts',
        output: output_src,
        plugins: [
            ...plugins,
            copy({
                targets: copy_targets
            }),
            {
                name: 'watch-files',
                buildStart() {
                    copy_targets.forEach(it => this.addWatchFile(it.src))
                }
            }
        ],
    },
]