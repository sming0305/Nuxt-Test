// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  css: [
    '@/assets/scss/app.scss',
    'element-plus/dist/index.css'
  ],
  // Nuxt 專案已內建 postcss，加上 autoprefixer: true 會自動為屬性加上瀏覽器相容性前綴
  postcss: {
    plugins: {
      autoprefixer: true
    }
  },
  plugins: [
    '~/plugins/element-plus.client.ts',
  ],
  modules: ['@pinia/nuxt']
})
