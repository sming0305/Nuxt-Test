<template>
    <div class="my-24 flex flex-col items-center">
        <p class="text-4xl text-gray-600">瀏覽次數</p>
        <span class="mt-4 text-6xl font-semibold text-sky-400" v-for="option in list" :key="option.id">
            文章列表
            {{ option.id }}
        </span>
    </div>
</template>

<script setup>
// https://backendsys.gdrentcars.com/frontend/Mall/categories/getcategories
// /api/count
const { data } = await useFetch('https://backendsys.gdrentcars.com/frontend/Mall/categories/getcategories', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: {
        datatoken: 'U8ImF2RWSh4V7gK9ljOzu1fPCZr6wtxXqTsvDdV1EbpR9YMKiH'
    },
})
const list = ref([])
list.value = data.value
// console.log(res)
console.log(data.value)
</script>

<!-- <script>
export default {
    data() {
        return {
            data: 0
        }
    },
    methods: {
        async fetchData() {
            apiFetch.
        }
    },
    mounted() {
        // 使用 setTimeout 模拟响应数据的异步性

    }
}
</script> -->