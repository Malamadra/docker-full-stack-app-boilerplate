const express = require('express')
const { connectDB } = require('./db')
const mongoose = require('mongoose')
const axios = require('axios')

const app = express()

const postSchema = new mongoose.Schema({
  name: String,
})

const Post = mongoose.model('Post', postSchema)

app.get('/test', async (req, res) => {
  const authApiUrl = process.env.AUTH_API_URL

  const { data } = await axios.get(`${authApiUrl}/current-user`)

  res.json({
    ...data,
    hello: 'world',
  })
})


connectDB()
  .on('error', console.error)
  .on('disconnected', connectDB)
  .once('open', () => {
    app.listen(process.env.API_PORT, () => {
      console.log('api server is running', '34243234')

      const newPost = new Post({ name: 'hello world!' })

      newPost.save((err, e) => {
        console.log(e)
      })

      console.log(newPost)
    })
  })
