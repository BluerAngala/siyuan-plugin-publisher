import {defineConfig} from 'vite'
import {loadEnv} from "vite";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd())

    const processEnvValues = {
        'process.env': Object.entries(env).reduce(
            (prev, [key, val]) => {
                return {
                    ...prev,
                    [key]: val,
                }
            },
            {},
        )
    }

    return {
        plugins: [vue()],
        base: './',
        resolve: {
            alias: [
                // https://github.com/intlify/vue-i18n-next/issues/789
                // 修复国际化警告
                {
                    find: 'vue-i18n',
                    replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
                }
            ]
        },
        // https://github.com/vitejs/vite/issues/1930
        define: processEnvValues
    }
})