import { useState, createContext, useContext } from 'react'

const CounterContext = createContext(null)

const CounterContextProvider = ({ children }) => {
  return (
    <CounterContext.Provider value={useState(0)}>
      {children}
    </CounterContext.Provider>
  )
}

const Container = () => {
  return (
    <div>
      <AddOneButton />
    </div>
  )
}

const AddOneButton = () => {
  const [, setCounter] = useContext(CounterContext)

  return (
    <div>
      <button onClick={() => setCounter((prev) => prev + 1)}>Add One</button>
    </div>
  )
}

const Counter = () => {
  const [counter] = useContext(CounterContext)

  return <div>Counter: {counter}</div>
}

const CounterUseState = () => {
  return (
    <CounterContextProvider>
      <Container />
      <Counter />
    </CounterContextProvider>
  )
}

const CounterUseStatePage = () => {
  return (
    <div>
      <CounterUseState />
      <CounterUseState />
      <CounterUseState />
      <CounterUseState />
    </div>
  )
}

export default CounterUseStatePage
