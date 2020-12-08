import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import axios from 'axios'

const App = () => {
  useEffect(() => {
    axios.get('/api/test').then(({ data }) => {
      console.log(data)
    })
  }, [])

  return <div>asdf 4567</div>
}

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
