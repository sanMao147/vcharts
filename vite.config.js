import vue from '@vitejs/plugin-vue'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import AutoImport from 'unplugin-auto-import/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import viteCDNPlugin from 'vite-plugin-cdn-import'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteCompression(),
    AutoImport({
      resolvers: [AntDesignVueResolver()]
    }),
    Components({
      resolvers: [AntDesignVueResolver()]
    }),
    visualizer({
      emitFile: false,
      file: 'stats.html', //分析图生成的文件名
      open: true //如果存在本地服务端口，将在打包后自动展示
    })
    // viteCDNPlugin({
    //   // 需要 CDN 加速的模块
    //   modules: [
    //     {
    //       name: 'lodash',
    //       var: '_',
    //       path: `https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js`
    //     }
    //   ]
    // })
    // cdn({
    //   isProduction: true,
    //   modules: [
    //     {
    //       name: 'vue',
    //       global: 'Vue'
    //     },
    //     {
    //       name: 'vue3-particles',
    //       global: 'particles',
    //       spare: [
    //         'https://cdn.jsdelivr.net/npm/vue3-particles@2.9.3/dist/vue3-particles.umd.min.js'
    //       ]
    //     },
    //     {
    //       name: 'tsparticles',
    //       global: 'Tsparticles',
    //       spare: [
    //         'https://cdn.jsdelivr.net/npm/tsparticles@2.9.3/tsparticles.bundle.min.js'
    //       ]
    //     },
    //     {
    //       name: 'echarts',
    //       global: 'Echarts',
    //       spare: [
    //         'https://cdn.jsdelivr.net/npm/echarts@5.4.2/dist/echarts.min.js'
    //       ]
    //     }
    //   ]
    // })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    // port: 5173, // 启动端口
    // hmr: {
    //   host: '127.0.0.1',
    //   port: 5173
    // },
    // 设置https代理
    proxy: {
      api: {
        target: 'http address',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  base: '/vcharts/',
  build: {
    emptyOutDir: true,
    sourcemap: false,
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const arr = id.toString().split('node_modules/')[1].split('/')
            switch (arr[0]) {
              case '@vue':
              case 'three':
                return `${arr[0]}`
              default:
                return 'vendor'
            }
          }
          return true
        },
        chunkFileNames: chunkInfo => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId.split('/')
            : []
          const fileName = facadeModuleId[facadeModuleId.length - 2] || '[name]'
          return `assets/${fileName}/[name].[hash].js`
        }
      }
    }
  }
})
