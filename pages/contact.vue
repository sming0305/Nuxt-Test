<template>
  <!-- <div class="bg-white py-24">
        <div class="flex flex-col items-center">
            <h1 class="text-6xl font-semibold text-rose-400">如果沒事不要找我 xDDD</h1>
            <NuxtLink to="/">回首頁</NuxtLink>
            <p class="my-8 text-3xl text-gray-600">這裡是 /contact</p>
        </div>
    </div> -->
  <NuxtLayout>
    <template #default>
      <div class="mx-6 mb-4 bg-slate-50 py-24">
        <div class="flex flex-col items-center">
          <h1 class="text-6xl font-semibold text-rose-400">如果沒事不要找我 xDDD</h1>
          <p class="my-8 text-3xl text-gray-600">這裡是 /contact</p>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex flex-col items-center">
        <p class="mt-4 text-xl text-slate-600">感謝您閱讀 Nuxe 3 學習筆記～</p>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup>
// definePageMeta({
//   layout: false,
// })

const enableCustomLayout = () => {
  setPageLayout('custom')
}
</script>