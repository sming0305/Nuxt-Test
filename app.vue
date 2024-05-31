<template>
  <!-- <div> -->
  <!-- 1--------. 原始自動載入的內容(元件) -->
  <!-- <NuxtWelcome /> -->
  <!-- 2--------. 路由 <NuxtPage> <NuxtLink to=""> -->
  <!-- <NuxtPage></NuxtPage>  -->
  <!-- 3--------. 布局模板 (Layouts) <NuxtLayout name=""> ， Layout 內沒有設定 name 的 slot 在外層 # 就是 default -->
  <!-- 這裡是最外層 app.vue
    <NuxtLayout name="default">
      <template #header>
        <p class="px-6 pt-4 text-xl text-green-500">這段會放置在 header 插槽</p>
      </template>
<template #default>
        <p class="px-6 pt-4 text-xl text-slate-800">
          被 NuxtLayout 包裹的元件將會放置到 Layout 的 slot 中
        </p>
      </template>
<template #footer>
        <p class="px-6 pt-4 text-xl text-blue-500">這段會放置在 footer 插槽</p>
      </template>
</NuxtLayout> -->
  <!-- 建立布局模板與路由頁面 -->
  <!-- <p class="pb-4 text-2xl text-slate-600">這裡是最外層 app.vue</p>
    <NuxtLayout>
      <template #header>
        <NuxtLink to="/">Nuxt 3 學習筆記回到首頁</NuxtLink>
      </template>
      <template #default>
        <NuxtPage></NuxtPage>
      </template>
    </NuxtLayout> -->
  <!-- 4-------- Nuxt 3 元件 (components) -->
  <!-- <NuxtLayout>
      <template #header>
        <NuxtLink to="/">Nuxt 3 學習筆記回到首頁</NuxtLink>
        <IronManWelcome />
        <BaseApplyButton></BaseApplyButton>
      </template>
      <template #default>
        <NuxtPage></NuxtPage>
      </template>
    </NuxtLayout> -->
  <!-- <div class="flex flex-col items-center">
      <div class="mt-8 flex items-center">
        <input id="show-button" v-model="useRound" name="show-button" type="checkbox" class="h-5 w-5" />
        <label for="show-button" class="ml-2 block text-base text-slate-800">使用圓角按鈕</label>
      </div> -->
  <!-- <component :is="useRound ? RoundButton : BaseButton" />
       -->
  <!-- {{ useRound }} -->
  <!-- <BaseApplyButton v-if="useRound"></BaseApplyButton>
        <RoundApplyButton v-else></RoundApplyButton>
    </div>
  </div> -->
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script>

</script>
