import * as ElementPlus from 'element-plus'
import  { zhTw }  from 'element-plus/es/locales.mjs'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use( ElementPlus, {
    locale: zhTw
  })
})