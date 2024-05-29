<template>
    <div class="bg-white py-24">
        <div class="flex flex-col items-center">
            <h1 class="text-4xl text-gray-600">這是 Posts 首頁</h1>
            <div class="my-4 flex space-x-4">
                <ul>
                    <li>
                        <NuxtLink to="/posts/top-3">前往 Top 3 文章</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/posts/花蓮租車">前往 指定文章</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/posts/台北租車/comments/6">前往 前往指定的文章留言</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/posts/top-10">前往 Top 10 文章</NuxtLink>
                    </li>
                </ul>
                <p>
                    <NuxtLink to="/">回首頁</NuxtLink>
                </p>
            </div>
        </div>
    </div>
</template>