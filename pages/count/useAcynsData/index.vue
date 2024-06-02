<template>
    <div class="my-24 flex flex-col items-center">
        <p class="text-4xl text-gray-600">瀏覽次數</p>
        <!-- <span class="mt-4 text-6xl font-semibold text-sky-400" v-for="option in list" :key="option.id">
            文章列表
            {{ option.id }}
        </span> -->
        <!-- {{ data }} -->
        {{ counterStore.list }}
    </div>
</template>

<script setup>
import { useCounterStore } from '~/stores/counter'

const counterStore = useCounterStore()
// await counterStore.getList()


const fetchList = async () => {
    await counterStore.getList()
}

await fetchList()

onMounted(() => {
  console.log('Component has been mounted')
})
// const { data } = await useFetch('https://backendsys.gdrentcars.com/frontend/Mall/categories/getcategories', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: {
//         datatoken: 'U8ImF2RWSh4V7gK9ljOzu1fPCZr6wtxXqTsvDdV1EbpR9YMKiH'
//     },
// })
// const list = ref([])
// list.value = data.value
</script>