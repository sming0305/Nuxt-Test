import { defineStore } from 'pinia'

export const useOtherStore = defineStore('other-store', {
    state: () => ({
        count: 0,
        nameObj: {
            name: 'name',
            age: 18
        }
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
        }
    },
    getters: {
        doubleCount: (state) => state.count * 2,
        doubleCount2() {
            return this.doubleCount * 2
        }
    }
})