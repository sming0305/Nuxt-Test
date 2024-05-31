<template>
  <!-- <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-6xl font-semibold text-gray-800">這裡是首頁</h1>
      <div class="my-4 flex space-x-4">
        <ul>
          <li>
            <NuxtLink to="/about">前往 About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact">前往 Contact</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/users/Andy">前往 user</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/catch-all/hello/world">前往 catch-all</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/omg">點擊我體驗 404</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/posts">前往部落格</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/docs">前往子路由範例</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div> -->
  <!-- <div class="mx-6 mb-4 bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-6xl font-semibold text-gray-800">這裡是首頁</h1>
      <div class="my-4 flex space-x-4">
        <NuxtLink to="/posts">POST</NuxtLink>
        <NuxtLink to="/about">前往 About</NuxtLink>
        <NuxtLink to="/contact">前往 Contact</NuxtLink>
      </div>
    </div>
  </div> -->
</template>

<script>
definePageMeta({
  middleware: 'redirect'
})
</script>
