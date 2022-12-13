import { useState, memo, useMemo, useCallback } from 'react'
import './App.css'

// const Swatch = ({color}) => {
//   console.log(`Swatch rendered ${color}`)

//   return (
//     <div style={{margin: 2, width: 75, height: 75, backgroundColor: color}}></div>
//   )
// }

// const Swatch = ({params}) => {
//   console.log(`Swatch rendered ${params.color}`)

//   return (
//     <div style={{margin: 2, width: 75, height: 75, backgroundColor: params.color}}></div>
//   )
// }

const Swatch = ({params, onClick}) => {
  console.log(`Swatch rendered ${params.color}`)

  return (
    <div 
      style={{
        margin: 2, 
        width: 75, 
        height: 75, 
        backgroundColor: params.color
      }}
      onClick={onClick}
    ></div>
  )
}

const MemoedSwatch = memo(Swatch) 

// const MemoedSwatch = memo(Swatch, (prevProps, nextPros) => {
//   return (
//     prevProps.params.color === nextPros.params.color
//   )
// }) 

function App() {
  const [appRenderIndex, setAppRenderIndex] = useState(0)
  const [color, setColor] = useState('red')

  console.log(`App rendered ${appRenderIndex}`)

  const params = useMemo(() => ({
    color
  }), [color])

  const handleClickWithoutCallback = () => {}
  const handleClickWithCallback = useCallback(() =>{}, [])

  return (
    <div className="App">
      <div>
        <button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>
          Rerender App
        </button>

        <button onClick={() => setColor(color === 'red' ? 'blue' : 'red')}>
          Change Color
        </button>
      </div>

      <div>
        {/* <Swatch color='red' /> */}
        {/* <MemoedSwatch params={params} onClick={handleClickWithoutCallback}/> */}
        <MemoedSwatch params={params} onClick={handleClickWithCallback}/>
        {/* <MemoedSwatch params={{color}} /> */}
        {/* <MemoedSwatch params={color === 'red' ? 'blue' : 'red'} /> */}
      </div>
    </div>
  )
}

export default App
