nvm list
node -v
nvm use

#### Nuxt 3 文章網址

https://ithelp.ithome.com.tw/users/20152617/ironman/5934?page=1

#### [Day 06]

#### Nuxt 3 目錄結構與自動載入 (Auto Imports)

Nuxt 3 在目錄的結構與命名其實有一定的規則與模式，"Nuxt 3 框架希望我們可以專注在開發而不是在配置"
所以在預設的情況專案的目錄架構已經有一個不錯的結構可以遵循。

#### 一個完整的 Nuxt 3 專案，它的目錄結構如下：

nuxt-app/
├── .nuxt/ 開發環境下由 Nuxt 產生出 Vue 的網站，.nuxt 目錄是自動產生的，你不應該任意的調整裡面檔案。
├── .output/ 當你的網站準備部署至正式環境時，每次編譯建構專案時，皆會自動重新產生這個目錄，你不應該任意的調整裡面檔案。
├── assets/ 顧名思義，這是靜態資源檔案所放置的位置，目錄內通常包含以下類型的檔案：
CSS 樣式檔案 (CSS、SASS 等...)、字型、圖片
這些靜態資源，最終在專案編譯建構時，由 Vite 或 webpack 進行編譯打包。
├── components/ 放置 Vue 元件的地方，Nuxt 會自動載入這個目錄中的任何元件。 (Auto Imports)
├── composables/ 組合式函數放置的目錄，簡單來說可以把常用或通用的功能寫成一個共用的函數或 JS 檔案，放置在這個目錄視為組合式函數，Nuxt 也會自動載入這些組合式函數，讓需要使用的頁面或元件可以直接做使用。
├── content/ 透過使用 Nuxt Content，我們可以在這個目錄下建立 .md、.yml、.csv 和 .json 檔案，Nuxt Content 會讀取並解析這些文件並進行渲染，用來建立基於文件的 CMS。
├── layouts/ 用於放置通用或可能重複使用到的佈局模板，提供程式碼的可重複使用性。
├── middleware/ Nuxt 3 提供了路由中間件的概念，用以在導航到下一個頁面之前執行一些程式碼如權限驗證。
├── node_modules/ 通常有使用 Node.js 的套件管理，例如 NPM，對此目錄應該有一些印象，使用 Nuxt 3 及專案所需要的相依套件都會存放在這個目錄。
├── pages/ 這個目錄主要是用來配置我們的頁面，你也可以只使用 app.vue 來完成你的網站，但如果建立了 pages 這個目錄，Nuxt 3 會自動整合 vue-router，並會依據目錄及檔案結構規則來自動產生出對應路由，也是 Nuxt3 產生路由的方式。
├── plugins/ Nuxt 會自動載入這個目錄檔案，作為插件使用，在檔案名稱可以使用後綴 .server 或 .client，例如， plugin.server.ts 或 plugin.client.ts 來決定只讓伺服器端或客戶端載入這個插件。
├── public/ 這個目錄主要用於伺服器根目錄提供的文件，包含必須固定的檔案名稱如 robots.txt 或不太會變動的 favicon.ico。
└── server/ 用於建立任何後端的邏輯如後端 API，這個目錄下還包含了 api、server 和 middleware 來區分功能，不具有自動載入，但支援 HMR。
├── api/
├── routes/
└── middleware/
├── .gitignore
.gitignore 檔案
在使用 Git 版本控制時，可以設置一些不需要或忽略關注變動的檔案及目錄。
├── .nuxtignore 可以設置讓 Nuxt 編譯建構時，一些不需要或忽略檔案。
├── app.config.ts 提供服務運行時暴露給客戶端使用的設定，因此，請不要在 app.config.ts 檔案中添加任何機密資訊。
├── app.vue Nuxt 3 網站的入口點元件。
├── nuxt.config.ts 用於配置 Nuxt 專案的設定檔。
├── package.json 這個檔案裡面定義了專案資訊、腳本、相依套件及版本號，通常有使用 Node.js 套件管理工具建置的專案都會包含此檔案。
└── tsconfig.json Nuxt 3 會在 .nuxt 目錄下自動產生一個 tsconfig.json 檔案，其中已經包含了一些解析別名等預設配置；你可以透過專案目錄下的 tsconfig.json 來配置擴展或覆蓋 Nuxt 3 預設的 TypeScript 設定檔。

#### 自訂目錄名稱

前面簡介了 Nuxt 3 的預設目錄結構與用途，在目錄名稱上 Nuxt 3 也提供了可以調整目錄名稱的方式，只要在 nuxt.config.ts 修改對應的參數，就可以自訂目錄的名稱。不過呢，也並不是所有的目錄都能修改，目前官方提供的 dir 參數共有以下四個目錄參數選項供修改：

layouts
middleware
pages
public

例如我想將 pages 目錄名稱調整為 views 就可以新增下列 dir 設定添加至 nuxt.config.ts，就可以將 pages 目錄功能及規則調整為 views 目錄來實現。

export default defineNuxtConfig({
dir: {
pages: 'views',
}
}

#### 自動載入 (Auto Imports)

在介紹目錄結構時有提到，某些目錄下的檔案是具有自動載入 (Auto Imports)的功能，意思就是說，當我們在這些特定的目錄 components、composables、layouts、plugin 添加檔案時，Nuxt 3 會自動載入這些元件或函數，

Nuxt 3 的自動載入具體有以下三種：

Nuxt 常用元件與函數
Vue 3 的 API
基於目錄的自動載入

Nuxt 常用元件與函數的自動載入
Nuxt 會自動載入一些元件或組合式函數，用以讓開發時可以在全部頁面或定義元件和插件可以使用。

Nuxt 自動載入的元件就好比 app.vue 程式碼內，一開始在 template 就有的 <NuxtWelcome /> 歡迎頁面元件，其他還包含了 <NuxtPage>、<NuxtLayout> 和 <NuxtLink to=""> 等，詳細可以參考
官方文件 : https://nuxt.com/docs/api/components/client-only

例如，下面程式碼中的 useAsyncData 與 $fetch 就是 Nuxt 自動載入的組合式函數，在各個頁面或元件都能做使用。

<script setup>
const { data, refresh, pending } = await useAsyncData('/api/hello', () => $fetch('/api/hello'))
</script>

#### Vue 3 的 API 的自動載入

例如，Vue 3 中會使用到的 ref、computed 等這類的 helpers 或 lifecycle hooks，在 Nuxt 3 也都將會自動的載入，不需要在 import。

<script setup>
// 不需要在 import ref 或 computed
const count = ref(1)
const double = computed(() => count.value * 2)
</script>

#### 基於目錄的自動載入

如前面所提及的，Nuxt 會自動載入定義在特定目錄的檔案，例如：

components: 相對於 Vue 的元件。
composables: 相對於 Vue 的組合式函數。
建立一個自動導入的元件
我們建立一個 ./components/IronManWelcome.vue 檔案：

<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-6xl font-semibold text-sky-400">2022 iThome</h1>
      <p class="mt-4 text-9xl font-bold text-gray-600">鐵人賽</p>
    </div>
  </div>
</template>
在 app.vue 檔案中，新增 <IronManWelcome /> 元件。

<template>
  <div>
    <IronManWelcome />
  </div>
</template>

現在，瀏覽器可以看見我們添加的元件效果。
https://ithelp.ithome.com.tw/upload/images/20220921/20152617Po6tI3jRgo.png

可以發現，我們不需要添加 import IronManWelcome from './components/IronManWelcome' 就可以直接在 template 直接使用 <IronManWelcome /> 元件，這就是 Nuxt 3 基於目錄的自動載入功能。

#### 關閉自動載入

如果想關閉 Nuxt 的自動載入元件或函數的功能，可以修改專案目錄下的 nuxt.config.ts 檔案，將 imports.autoImport 設定為 false。

export default defineNuxtConfig({
imports: {
autoImport: false
}
})

#### 顯式載入 (Explicit Imports)

Explicit (顯式、明確的)，當我們需要手動載入，就可以用 #import 這個 Nuxt 釋出的別名，來個別載入那些具有自動載入的元件或函數。

<script setup>
import { ref, computed } from '#imports'

const count = ref(1)
const double = computed(() => count.value * 2)
</script>

#### 小結

Nuxt 3 的專案目錄與結構已經有一個規定可以遵守，Nuxt 3 規劃的目錄及檔案架構，讓我們可以不用再煩惱該如何配置，只需要專注開發，當你熟悉這些目錄檔案規則與自動載入的特性，肯定能更快上手 Nuxt 3。

#### [Day 07]

#### Nuxt 3 頁面 (Pages) 與路由 (Routing)

#### 前言

在 Vue 中，我們會使用到 Vue Router 來實現切換頁面或路由的需求，而在 Nuxt 3 中，預設是沒有使用路由相關套件，**直至建立了 pages 目錄，Nuxt 將會自動載入 Vue Router 來管理路由，並且具有一定的規則需要遵循**，以下將介紹頁面目錄與路由之間的關係。

#### 基於檔案的路由 (File-based Routing)

在 Nuxt 3 專案的 pages 目錄下，當我們建立了一個頁面檔案，就會以該檔案建立出相對應的路由，Nuxt 3 基於檔案的路由，也使用了程式碼拆分將每個頁面需要的程式碼梳理出來，並以動態載入的方式載入最小所需要的程式碼。因為是以目錄結構與檔案命名方式來約定，也稱之為約定式路由。

#### 建立第一個頁面

Nuxt 3 的 pages 目錄，是用來建立頁面並放置的目錄，當專案下有存在 pages 目錄，Nuxt 將會自動載入 Vue Router 來實現路由效果，目錄下的檔案通常是 Vue 的元件，也允許具有 .vue、.js、.jsx、.ts 或 .tsx 副檔名的檔案。
當我們建立 ./pages/index.vue，檔案內容如下，則表示路由 / 對應到這個頁面檔案，我們只需要建立檔案，路由的配置將會由 Nuxt 3 自動產生。

若你還記得 Vue Router 中的 <router-view />，這是路由需要的進入點，同樣的在 Nuxt 3 我們需要使用 <NuxtPage /> 來顯示我們建立的路由頁面，這裡非常重要，否則路由及頁面將無法正確運作。

修改 ./app.vue，檔案內容如下：

<template>
  <div>
    <NuxtPage />
  </div>
</template>

接著我們在瀏覽器瀏覽 / 路由，如 http://localhost:3000/，就可以看到我們在 ./pages/index.vue 頁面內寫的標題文字「這是首頁」囉！

#### 約定式路由中的 index.vue

在開頭有提到，Nuxt 3 提供了一個基於檔案的路由，從上的例子你或許能發現，基本上檔案名稱就是對應著路由名稱，但 index.vue 比較特別，它所對應的是路由 / 。

index.[ext] 這個效果和特性，其實是與 Node.js 底層核心有關，在此就不贅述。

舉例來說，我可以在 pages 下建立一個 docs.vue 表示對應路由 /docs，也可以將檔案放置在 docs 目錄下並重新命名為 index.vue 即 ./pages/docs/index.vue，這樣也可以透過 /docs 瀏覽到相同的頁面。

所以當 index.vue 存在於 pages 目錄下，已經位於網站頁面的第一層，所以我們瀏覽 http://localhost:3000/ 就可以做出首頁的效果。

#### 多個路由頁面

在實務上，通常一個網站會有多個頁面，並分別對應到不同的路由，接下來我們嘗試建立 About 與 Contact 兩個頁面。

#### 建立多個路由頁面

建立 ./pages/about.vue，內容如下：

<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-6xl font-semibold text-yellow-400">大家好！我是 Ryan</h1>
      <p class="my-8 text-3xl text-gray-600">這裡是 /about</p>
    </div>
  </div>
</template>

建立 ./pages/contact.vue，內容如下：

<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-6xl font-semibold text-rose-400">如果沒事不要找我 xDDD</h1>
      <p class="my-8 text-3xl text-gray-600">這裡是 /contact</p>
    </div>
  </div>
</template>
接著我們在瀏覽器分別瀏覽 /about 或 /contact，就可以看到我們路由效果囉！
可以發現所建立的檔案名稱，最終就會自動對應產生出 /about 及 /contact 路由。

#### 自動產生的路由

如果你有興趣想看看 Nuxt 自動產生出來的路由配置長什麼樣子，可以使用 npm run build 或 npx nuxt build 來建構出 .output 目錄，並打開 .output/server/chunks/app/server.mjs，搜尋 const \_routes = 或剛剛建立的檔案名稱 about.vue，就可以找到下面這一段程式碼：

**這部分有問題 要確認一下 找不到 .output/server/chunks/app/server.mjs 這個檔案**

最終在 C:\FrontEnd\NUXT\nuxt-app\.output\server\chunks\build\server.mjs 找到 const \_routes

這段程式碼與 Vue 中的路由配置非常相像，其實這就是 Nuxt 3 檢測到 pages 目錄，自動幫我們載入 Vue Router 與依據 pages 目錄下的檔案結構，自動產生出所需的路由配置。

#### 建立路由連結

在 Vue Router 我們可以使用 <router-link> 來建立路由連結，以此來導航至其他頁面，而在 Nuxt 3 的路由中，則是使用 <NuxtLink> 來建立路由連結來進行頁面的跳轉，我們嘗試在首頁新增幾個路由連結來進行頁面導航。

調整 ./pages/index.vue，內容如下：

<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-6xl font-semibold text-gray-800">這裡是首頁</h1>
      <div class="my-4 flex space-x-4">
        <NuxtLink to="/about">前往 About</NuxtLink>
        <NuxtLink to="/contact">前往 Contact</NuxtLink>
      </div>
    </div>
  </div>
</template>

接著我們在瀏覽器瀏覽首頁，點擊「前往 About」或「前往 Contact」就可以看見路由導航效果囉！

使用 <NuxtLink> 時，可以就把它想像為<router-link> 的替代品，像 to 這個 Pros 控制路由位置的用法基本上一樣，其他更多的 Pros 用法及說明可以參考官網的文件。
https://nuxt.com/docs/api/components/nuxt-link#props

如果想要使用像 Vue Router 提供的 router.push 方法於 Vue 中直接呼叫來導航至其他頁面，在 Nuxt 中你可以使用 navigateTo，參數可以參考官方文件。
https://nuxt.com/docs/api/utils/navigate-to#navigateto

#### 帶參數的動態路由匹配

在實務上，我們可能需要將路徑作為參數傳遞給同一個元件，例如，我們有一個 users 頁面元件，在 /users/ryan 或 /users/jennifer 路徑，都能匹配到同一個 users 元件，並將 ryan 或 jennifer 當作參數傳遞給 users 頁面元件使用，那麼我們就需要動態路由來做到這件事。

在 Vue 3 使用 Vue Router 我們可能會寫出如下路由配置：

{
name: "users",
path: "/users/:id",
component: "./pages/users.vue",
}

這樣我們就能達到進入 /users/ryan 路由將 ryan 當作 id 參數傳入 users 元件中，路徑參數用冒號 : 表示，這個被匹配的參數 (params)，會在元件中可以使用 useRoute() 與 route.params.id 取得。

在 Nuxt 3 中，我們要實現這個效果，需要將檔案名稱添加中括號 []，其中放入欲設定的參數名稱，譬如下面的目錄結構與檔案名稱。

./pages/
└── users/
└── [id].vue

建立 ./pages/users/[id].vue 檔案，內容如下：

<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-3xl text-gray-600">這裡是 Users 動態路由頁面</h1>
      <p class="my-8 text-3xl text-gray-600">
        匹配到的 Id: <span class="text-5xl font-semibold text-blue-600">{{ id }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { id } = route.params
</script>

我們在 script 就可以從 route.params 拿到我們所設定的參數名稱 id，並將其在 template 中渲染出來。瀏覽 http://localhost:3000/users/ryan ，看看效果，Nuxt 3 就能匹配到使用者的 id 參數 ryan，並傳入 users 頁面元件。

你也可以在 template 直接使用 {{ $route.params.id }} 來渲染出 id 參數。

#### 匹配所有層級的路由

如果你需要匹配某個頁面下的所有層級的路由，你可以在參數前面加上 ... ，例如，[...slug].vue，這將匹配該路徑下的所有路由。

建立 ./catch-all/[...slug].vue 檔案：

./pages/
└── catch-all/
└── [...slug].vue

./catch-all/[...slug].vue 檔案內容如下：

<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-4xl text-gray-800">這是 catch-all/... 下的頁面</h1>
      <p class="mt-8 text-3xl text-gray-600">匹配到的 Params:</p>
      <p class="my-4 text-5xl font-semibold text-violet-500">{{ $route.params.slug }}</p>
      <span class="text-xl text-gray-400">每個陣列元素對應一個層級</span>
    </div>
  </div>
</template>

我們可以輸入 /catch-all/hello 及 /catch-all/hello/world，路由的參數 slug 就會是一個陣列，陣列的每個元素對應每一個層級。

建立 404 Not Found 頁面
Nuxt 3 提供一個配置來處理 404 Not Found 的頁面，當我們建立 ./pages/[...slug].vue 頁面， Nuxt 3 所有未匹配的路由，將會交由這個頁面元件做處理，並同時使用 setResponseStatus(404) 函數設定 404 HTTP Status Code。
./pages/[...slug].vue

<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-8xl font-semibold text-red-500">404</h1>
      <p class="my-8 text-3xl text-gray-800">Not Found</p>
      <p class="my-8 text-xl text-gray-800">真的是找不到這個頁面啦 >///<</p>
    </div>
  </div>
</template>

<script setup>
setResponseStatus(404)
</script>

/omg 這個是不存在的頁面，未匹配的路由就會交由 ./pages/[...slug].vue 頁面來處理。

#### 建立多層的目錄結構

如果理解了動態路由的中括號 [] 用法，那我們就可以建立更複雜的頁面目錄結構：

./pages/
└── posts/
├── [postId]/
│ ├── comments/
│ │ └── [commentId].vue
│ └── index.vue
├── index.vue
└── top-[number].vue

這四個 Vue 頁面的參考程式碼如下：
./pages/posts/index.vue

<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-4xl text-gray-600">這是 Posts 首頁</h1>
      <div class="my-4 flex space-x-4">
        <NuxtLink to="/posts/8"> 前往指定的文章 </NuxtLink>
        <NuxtLink to="/posts/8/comments/1">前往指定的文章留言</NuxtLink>
        <NuxtLink to="/posts/top-3">前往 Top 3</NuxtLink>
        <NuxtLink to="/posts/top-10">前往 Top 10</NuxtLink>
      </div>
    </div>
  </div>
</template>
./pages/posts/top-[number].vue

<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-3xl text-gray-600">這是 posts/top-[number] 的頁面</h1>
      <p class="my-8 text-3xl text-gray-600">
        匹配到的 Top Number: <span class="text-5xl font-semibold text-rose-500">{{ number }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { number } = route.params
</script>

./pages/posts/[postId]/index.vue

<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-3xl text-gray-600">這是 posts/[postId] 的頁面</h1>
      <p class="my-8 text-3xl text-gray-600">
        匹配到的 Post Id: <span class="text-5xl font-semibold text-blue-600">{{ postId }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { postId } = route.params
</script>

./pages/posts/[postId]/comments/[commentId].vue

<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-3xl text-gray-600">這是 posts/[postId]/comments/[commentId] 的頁面</h1>
      <p class="my-8 text-3xl text-gray-600">
        匹配到的 Post Id: <span class="text-5xl font-semibold text-blue-600">{{ postId }}</span>
      </p>
      <p class="my-8 text-3xl text-gray-600">
        匹配到的 Comment Id:
        <span class="text-5xl font-semibold text-purple-400">{{ commentId }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { postId, commentId } = route.params
</script>

來看看實際路由及匹配效果。

為了方便理解，整理了以下表格，來表示頁面結構及期望匹配的模式與參數：

./pages/posts/index.vue

匹配模式 匹配路徑 匹配參數 (Params)
/posts /posts 無
./pages/posts/top-[number].vue

匹配模式 匹配路徑 匹配參數 (Params)
/posts/top-:number /posts/top-3 { number: 3 }
/posts/top-:number /posts/top-5 { number: 5 }
./pages/posts/[postId]/index.vue

匹配模式 匹配路徑 匹配參數 (Params)
/posts/:postId /posts/8 { postId:8 }
./pages/posts/[postId]/comment/[commentId].vue

匹配模式 匹配路徑 匹配參數 (Params)
/posts/:postId/comments/:commentId /posts/8/comments/1 { postId: 8, commentId: 1 }
到這裡應該對於如何使用檔案名稱與目錄結構，來製作動態路由與匹配參數有一些概念了。



####  巢狀路由 (Nested Routes)
巢狀路由 (Nested Routes) 或稱嵌套路由，顧名思義，當我們想要在一個頁面鑲嵌另一個頁面時，就需要巢狀路由來幫助我們。

例如，我們想要在 docs 頁面元件中顯示 doc-1 或 doc-2 頁面元件，並在切換 doc-1 或 doc-2 頁面時，只是在 docs 下的嵌套頁面進行切換。

/docs/doc-1                           /docs/doc-2
+------------------+                  +-----------------+
| docs             |                  | docs            |
| +--------------+ |                  | +-------------+ |
| | doc-1        | |  +------------>  | | doc-2       | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+

在 Vue 3 使用 Vue Router 實作上述巢狀路由時，即 docs 頁面要能顯示 doc-1，我們在路由配置可能就會寫 path: '/docs' 與 children，並在 children 加入 path: '/doc-1'，其中 docs 頁面包含 <router-view />，最終瀏覽路由路徑 /docs/doc-1 就可以看到嵌套頁面的效果。

{
    path: '/docs',
    component: () => import('./pages/docs.vue')
    children: [
      {
        path: 'doc-1',
        component: () => import('./pages/docs/doc-1.vue')
      }
    ]
}

而在 Nuxt 3 頁面的約定式路由機制下，我們即是透過目錄結構與頁面元件實做出嵌套路由的效果。
舉例來說，當我們建立了下面的目錄頁面結構：

這裡需要注意，一定要有 docs.vue 與 docs 同名的目錄

./pages/
├── docs/
│   ├── doc-1.vue
│   └── doc-2.vue
└── docs.vue

頁面元件的參考程式碼如下：
./pages/docs.vue

<template>
  <div class="bg-white">
    <div class="my-6 flex flex-col items-center">
      <h1 class="text-3xl font-semibold text-gray-800">這裡是 Docs</h1>
      <div class="my-4 flex space-x-4">
        <NuxtLink to="/docs/doc-1">前往 Doc 1</NuxtLink>
        <NuxtLink to="/docs/doc-2">前往 Doc 2</NuxtLink>
      </div>
    </div>
    <div class="border-b-2 border-gray-100" />
    <div class="flex flex-col items-center">
      <NuxtPage />
    </div>
  </div>
</template>
./pages/docs/doc-1.vue

<template>
  <div class="flex flex-col items-center">
    <p class="my-8 text-3xl text-blue-500">這是我的第一份文件</p>
  </div>
</template>
./pages/docs/doc-2.vue

<template>
  <div class="flex flex-col items-center">
    <p class="my-8 text-3xl text-green-500">這是我的第二份文件</p>
  </div>
</template>
Nuxt 3 在自動生成路由時，實際上幫我們做出了類似這樣子的路由結構：

{
    name: "docs",
    path: "/docs",
    component: "./pages/docs.vue",
    children: [
      {
        name: "docs-first-doc",
        path: "doc-1",
        component: "./pages/docs/doc-1.vue",
      }
    ],
}
一定要記得在 docs 頁面加上 <NuxtPage />，來作為顯示巢狀頁面的容器，接著分別瀏覽 /docs、 /docs/doc-1 與 /docs/doc-2，可以發現在兩個頁面中上方的皆有顯示標題「這裡是 Docs」，該文字是由 docs.vue 元件提供的標題文字，而頁面下方則是 doc-1 與 doc-2 子頁面顯示的地方，以此就可以實現巢狀路由效果囉！

####  小結
這篇介紹了關於 Nuxt 3 的頁面與路由，這裡的重點要記得，透過目錄檔案的結構與名稱及中括號 [] 我們就可以完成多數路由的情境，確實方便很多，也足以應付大部分實務上的需求，如果真的需要手動建立路由規則可以在參考官方或等待釋出更好解決方案。


#### [Day 08] 
#### Nuxt 3 布局模板 (Layouts)


#### 前言
Nuxt 3 提供了一個布局模板 (Layouts) 的功能，可以讓你定義好布局模板後，在整個 Nuxt 中使用，舉例來說就很適合如上方有導覽列，下方是網頁主體內容的這種排版方式，將其構建成一個布局模板後，我們就可以重複使用這種布局方式。

#### 布局模板 (Layouts)
布局模板通常放置在 ./layouts 目錄之下，也具有異步自動導入的效果，當新增好布局檔案後，我們就可以在 app.vue 中，**添加 <NuxtLayout /> 元件來表示使用布局模板，也可以通過 name 設定不同的模板名稱**。

#### 建立一個預設的布局模板
布局模板在 Nuxt 3 中有約定一個名稱為 default.vue 作為預設的模板，如果在頁面元件中未特別指定要使用哪個模板或 <NuxtLayout /> 沒有設定 name 屬性，那麼都將會使用 default 作為預設的布局。

Step 1. 建立預設布局模板
新增 ./layouts/default.vue 檔案內容如下：

<template>
  <div class="bg-sky-100 py-2">
    <p class="px-6 py-4 text-2xl text-gray-700">這是預設的布局，全部頁面都會使用到</p>
    <slot />
  </div>
</template>

在布局模板中，通常會包含一個 <slot /> 插槽，這個未命名的插槽 (slot) 即為預設插槽，這將會是採用這個布局模板的頁面元件，顯示的內容容器位置。


Step 2. 添加 元件
調整 app.vue 檔案，內容如下，我們添加 <NuxtLayout> 作為布局模板顯示的位置，name 屬性預設是 default，不過我們還是寫上 name="default" 避免誤會，這個 name 屬性值對應的即是布局模板的名稱。

布局模板呈現
下圖可以看見，我們在 app.vue 所寫的文字「這裡是最外層 app.vue」，會是在最外層，而緊接著的 <NuxtLayout name="default"></NuxtLayout>，就是布局頁面 default.vue。

布局模板中的插槽
如果你有注意到，default.vue 檔案內程式碼內，有一個插槽 <slot />，這裡就會是 <NuxtLayout> 內的元素所顯示的位置。
例如，我們在 app.vue 稍作調整：



























#### 關於部屬

好像看到您說的了

"部署時，你可以將整個 .output 上傳至正式環境的機器上，並使用 Node.js 做執行，但為了防止我們的服務因為異常，導致 Node.js 服務意外崩潰，我們需要一個 Process 的 Daemon，來將服務常駐，意外崩潰時能自動重啟，來維持整個網站的正常服務。

通常我們會在正式環境使用 PM2 來管理 Node.js 的服務，PM2 是維持一個 Process 執行的管理器，我們可以藉由 PM2 來啟動我們的 Nitro Server，當服務崩潰時能自動的重新啟動，以維持服務的正常運作，除此之外 PM2 可以啟用叢集 (Cluster) 的功能結合請求的附載平衡，來讓多核心的機器提升資源的利用率與效能，更還有監測多項數據等功能可供正式環境做使用。"

正常來說  上面也有提到  可以把"整個 .output 上傳至正式環境的機器上，並使用 Node.js 做執行"

但更推薦使用"PM2 來管理 Node.js 的服務，PM2 是維持一個 Process 執行的管理器，我們可以藉由 PM2 來啟動我們的 Nitro Server，當服務崩潰時能自動的重新啟動，以維持服務的正常運作"
ChatGPT
没错，部署 Nuxt.js 应用程序到生产环境时，可以采用以下两种方式：

直接使用 Node.js 执行 .output 中的文件
使用 PM2 管理和执行 Node.js 服务
虽然第一种方法可以工作，但为了保证服务的稳定性和可靠性，更推荐使用 PM2 或类似的进程管理工具。以下是更详细的步骤和解释：

方法 1：直接使用 Node.js 执行
将构建后的 .output 目录上传到服务器后，可以通过以下命令直接启动应用：

bash
複製程式碼
node .output/server/index.mjs
这会启动 Nuxt.js 应用并监听指定的端口。虽然简单，但缺乏对进程崩溃的自动重启和进程管理功能。

方法 2：使用 PM2 管理和执行
1. 安装 PM2
如果尚未安装 PM2，可以通过 npm 安装：

bash
複製程式碼
npm install -g pm2
2. 启动 Nuxt.js 应用
在服务器上运行以下命令，使用 PM2 启动应用：

bash
複製程式碼
pm2 start .output/server/index.mjs --name nuxt-app
3. 查看 PM2 进程状态
可以通过以下命令查看 PM2 管理的进程状态：

bash
複製程式碼
pm2 status
4. 保存 PM2 配置并设置开机启动
为了确保服务器重启后应用能自动启动，可以保存 PM2 的进程列表并设置 PM2 随系统启动：

bash
複製程式碼
pm2 save
pm2 startup
使用 PM2 的好处
自动重启：如果应用崩溃，PM2 会自动重启它，确保服务不中断。
监控和日志：PM2 提供了丰富的监控和日志记录功能，可以方便地查看应用的运行状态和日志。
负载均衡：PM2 支持集群模式，可以充分利用多核 CPU，提升应用性能和资源利用率。
部署流程总结
构建 Nuxt.js 应用：

bash
複製程式碼
npm run build
上传 .output 目录到服务器。

在服务器上安装依赖和启动 PM2：

bash
複製程式碼
cd /path/to/your/project
npm install
pm2 start .output/server/index.mjs --name nuxt-app
pm2 save
pm2 startup
通过上述步骤，确保你的 Nuxt.js 应用在生产环境中稳定运行，并具备自动重启和监控功能。

那我想問一下  如果我只是想要測試  我能夠在我自己的這台電腦跑
node .output/server/index.mjs

然後看到實體的網頁嗎   還是不是我想的這樣
ChatGPT
是的，你可以在本地计算机上运行 node .output/server/index.mjs 来启动 Nuxt.js 应用，并查看实际的网页效果。这在本地测试和调试时非常有用。下面是具体的步骤：

本地运行 Nuxt.js 应用
确保你已经构建了 Nuxt.js 应用：
如果还没有构建应用，请先运行：

bash
複製程式碼
npm run build
运行构建后的应用：
在构建完成后，进入项目根目录，然后运行以下命令：

bash
複製程式碼
node .output/server/index.mjs
查看输出：
你会看到类似以下的输出：

bash
複製程式碼
Listening on http://[::]:3000
打开浏览器：
在浏览器中访问 http://localhost:3000，你应该能够看到你的 Nuxt.js 应用的实际网页。

注意事项
确保依赖项已安装：在运行 node .output/server/index.mjs 之前，确保你的项目中所有依赖项都已安装。如果你从构建后直接运行，可能需要先运行 npm install。
环境变量：如果你的应用依赖于某些环境变量，请确保这些变量在运行时已正确设置。
示例
假设你的项目目录结构如下：

lua
複製程式碼
/my-nuxt-app
|-- .output
|   |-- server
|       |-- index.mjs
|       |-- chunks
|-- node_modules
|-- nuxt.config.ts
|-- package.json
|-- ...
在项目根目录下运行以下命令：

bash
複製程式碼
node .output/server/index.mjs
然后在浏览器中打开 http://localhost:3000。你应该能够看到你的 Nuxt.js 应用的首页或其他页面。

本地测试的优势
快速反馈：可以快速查看代码修改后的效果。
调试：方便调试代码，解决问题。
模拟生产环境：通过本地运行构建后的代码，可以模拟生产环境，检测潜在问题。
通过以上步骤，你可以在本地环境中完整运行和测试你的 Nuxt.js 应用。在确认应用正常运行后，再进行生产环境的部署。

感謝  那另外我想問一下 http://localhost:3000 跟我們一般看到的網址 https 且有網域名等正式的網站不太一樣

這兩者是怎麼轉換過去的  如果使用您剛剛說的
使用 PM2 管理和执行 Node.js 服务 (並且有 https  和正式網域名 )
是怎麼做到的
ChatGPT
要将本地运行的 Nuxt.js 应用转换为具有 HTTPS 和正式域名的生产环境网站，需要几个步骤，包括服务器配置、域名设置、SSL 证书配置等。下面是一个基本的指南，介绍如何实现这一转换：

1. 使用 PM2 管理和运行 Nuxt.js 应用
首先，你需要将应用部署到你的服务器，并使用 PM2 管理和运行你的 Nuxt.js 应用。

安装 PM2
在服务器上安装 PM2：

bash
複製程式碼
npm install pm2 -g
运行 Nuxt.js 应用
在项目根目录下运行以下命令：

bash
複製程式碼
pm2 start .output/server/index.mjs --name "nuxt-app"
这会启动你的 Nuxt.js 应用，并让 PM2 管理它。

2. 设置反向代理服务器（例如 Nginx）
为了实现 HTTPS 和绑定域名，你通常需要使用反向代理服务器，例如 Nginx。以下是一个基本的 Nginx 配置示例：

安装 Nginx
在你的服务器上安装 Nginx（具体步骤可能因操作系统不同而有所不同）：

bash
複製程式碼
sudo apt update
sudo apt install nginx
配置 Nginx
编辑 Nginx 配置文件（例如 /etc/nginx/sites-available/default 或者 /etc/nginx/sites-available/your-domain.com）：

nginx
複製程式碼
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem; # managed by Certbot
}
3. 获取并配置 SSL 证书（使用 Let's Encrypt）
为了启用 HTTPS，你需要一个 SSL 证书。Let's Encrypt 是一个免费的证书颁发机构，可以帮助你轻松获取和配置 SSL 证书。

安装 Certbot
Certbot 是一个方便的工具，用于从 Let’s Encrypt 获取 SSL 证书并自动配置 Nginx。

bash
複製程式碼
sudo apt install certbot python3-certbot-nginx
获取 SSL 证书
使用 Certbot 获取 SSL 证书并自动配置 Nginx：

bash
複製程式碼
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
Certbot 将会自动获取 SSL 证书，并配置 Nginx 以启用 HTTPS。

4. 测试和重启 Nginx
确保 Nginx 配置没有错误：

bash
複製程式碼
sudo nginx -t
重启 Nginx 以应用更改：

bash
複製程式碼
sudo systemctl restart nginx
5. 访问你的应用
现在，你应该可以通过 https://your-domain.com 访问你的 Nuxt.js 应用了。

总结
通过以上步骤，你可以将本地运行的 Nuxt.js 应用部署到生产服务器上，并使用 PM2 管理应用的运行。通过配置 Nginx 作为反向代理服务器，并使用 Let's Encrypt 获取 SSL 证书，你可以启用 HTTPS 并绑定正式的域名。这将确保你的应用能够在生产环境中安全可靠地运行，并提供给用户访问。

這些步驟來說  實際上  前端負責還是後端負責呢?
還是說已隨著時間的演進  已經沒有明確界線了  前後端都可處理
ChatGPT
这些步骤涉及到前端和后端两方面的工作，但可能因组织和团队的不同而有所不同。一般来说：

前端责任：

将 Nuxt.js 应用打包并部署到生产环境。
在开发过程中配置好应用的基本设置，例如基本路由和页面组件。
与后端协调确保前端应用可以正确地与后端 API 进行交互。
在 Nuxt.js 应用中设置好 SEO（搜索引擎优化）相关的内容。
确保前端应用可以在生产环境中安全、可靠地运行，例如通过配置 HTTPS 和绑定域名。
后端责任：

管理服务器环境，并确保服务器可以运行 Node.js 应用。
配置反向代理服务器（如 Nginx）以及获取和配置 SSL 证书（如 Let's Encrypt）以启用 HTTPS。
管理和配置 PM2 等进程管理器，以确保 Node.js 应用可以持续运行，并在发生异常时自动重启。
确保服务器的安全性，并进行必要的服务器维护工作。
总的来说，这些步骤涉及到前后端的合作和协调。在一些组织中，可能会有专门负责前端或后端的团队或个人来处理这些任务，而在其他组织中，前后端开发者可能需要共同合作来完成这些工作。因此，根据具体情况，可能会有不同的责任分配和工作流程。