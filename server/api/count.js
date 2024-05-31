let counter = 0

export default defineEventHandler(async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000)) // 等待 2 秒

  counter += 1

  return JSON.stringify(counter)
})