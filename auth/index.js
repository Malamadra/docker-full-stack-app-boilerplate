const express = require('express')

const app = express()

app.get('/api/current-user', (req, res) => {
  res.json({
    id: '123',
    email: 'ololo@gmail.com',
  })
})


app.listen(process.env.AUTH_PORT, () => {
  console.log('auth is running')
})
