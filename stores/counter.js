import { defineStore } from 'pinia'
import { useOtherStore } from './other-store'

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
        nameObj: {
            name: 'name'
        },
        list: []
    }),
    actions: {
        increment() {
            this.count += 1
        },
        decrement() {
            this.count -= 1
        },
        setCount10() {
            this.count = 10
        },
        async getList() {
            try {
                const { data } = await useFetch('https://backendsys.gdrentcars.com/frontend/Mall/categories/getcategories', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: {
                        datatoken: 'U8ImF2RWSh4V7gK9ljOzu1fPCZr6wtxXqTsvDdV1EbpR9YMKiH'
                    },
                })
                console.log(data)
                this.list = data
            } catch (err) {
                console.log(err)
            }
        }
    },
    getters: {
        doubleCount: (state) => state.count * 2,
        doubleCount2() {
            return this.doubleCount * 2
        },
        addAge() {
            const otherStore = useOtherStore()
            return otherStore.nameObj.age + 1
        }
    }
})


// export const useCounterStore = defineStore('counter', () => {
//     const count = ref(0)
//     const increment = () => {
//         count.value += 1
//     }
//     const decrement = () => {
//         count.value -= 1
//     }

//     const doubleCount = computed(() => { count.value * 2 })
//     return {
//         count,
//         increment,
//         decrement,
//         doubleCount
//     }
// })