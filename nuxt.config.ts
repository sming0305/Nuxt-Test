// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  css: [
    '@/assets/scss/app.scss',
    'element-plus/dist/index.css'
  ],
  postcss: {
    plugins: {
      autoprefixer: true
    }
  },
  plugins: [
    '~/plugins/element-plus.client.ts',
  ]
})
