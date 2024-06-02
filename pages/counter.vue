<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <span class="text-9xl font-semibold text-sky-600">{{ counterStore.count }}
        {{ counterStore.doubleCount }}
        {{ counterStore.doubleCount2 }}
        {{ counterStore.addAge }}
      </span>
      <div class="mt-8 flex flex-row">
        <button
          class="font-base mx-2 rounded-full bg-sky-500 px-4 py-2 text-xl text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
          @click="counterStore.increment">
          增加
        </button>
        <button
          class="font-base mx-2 rounded-full bg-sky-500 px-4 py-2 text-xl text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
          @click="counterStore.decrement">
          減少
        </button>
      </div>
      <div class="mt-8">
        <NuxtLink to="/">回首頁</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '~/stores/counter'
const counterStore = useCounterStore()
counterStore.setCount10()
console.log(counterStore.count)
counterStore.$patch({ count: 15 }) // 透過 $patch 修改 部分的值

// 集合類型的修改，例如陣列的新增、刪除或指定修改某一個元素等操作，你可以使用 $patch 傳入一個函數，這個函數會接收一個 state 讓你可以修改，對於比較複雜的操作會很方便。
counterStore.$patch((state) => {
  state.nameObj = { name: '小王' }
})
console.log(counterStore)


</script>