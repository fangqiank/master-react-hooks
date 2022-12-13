import { useState, useMemo, useEffect } from 'react'
import './App.css'
import { useFetch } from './useFetch'

const useStopwatch = () => {
  const[count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(`count: ${count}`)
      setCount(prev => prev + 1)
  }, 1000)

    return () => clearInterval(interval)
  }, [])

  return count
}

function App() {
  const [url, setUrl] = useState(null)
  // const myOpts = useMemo(() => ({url}), [url])
  const count = useStopwatch()
  const {data} = useFetch({
    url, 
    onSuccess: () => console.log('success')
  })

  console.log(`App rendering`)
   
  return (
    <div className="App">
      <div>Count: {count}</div>
      <div>
        {JSON.stringify(data)}
      </div>
      <div style={{marginTop: '10px'}}>
        <button onClick={() => setUrl('/person1.json')}>Person One</button>
        <button onClick={() => setUrl('/person2.json')}>Person Two</button>
      </div>
    </div>
  )
}

export default App
