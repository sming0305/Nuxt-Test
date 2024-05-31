const apiFetch = $fetch.create({
    baseURL: 'https://backendsys.gdrentcars.com/frontend',
    headers: {
      'Accept': 'application/json',
      'Cache-Control': 'no-cache',
    },
  })
  
  export { apiFetch }