import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ReactPlayer from 'react-player'

function App () {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <ReactPlayer
        url={'https://vps.blady.dev/live/dog/index.m3u8'}
        controls={true}
      />
    </div>
  )
}

export default App
