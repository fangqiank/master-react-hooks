import { useReducer, createContext, useContext } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return state + 1
    case 'sub':
      return state - 1
    default:
      return state
  }
}

const CounterContext = createContext(null)

const CounterContextProvider = ({ children }) => {
  return (
    <CounterContext.Provider value={useReducer(reducer, 0)}>
      {children}
    </CounterContext.Provider>
  )
}

const Container = () => {
  return (
    <div>
      <AddOneButton />
      <SubOneButton />
    </div>
  )
}

const AddOneButton = () => {
  const [, dispatch] = useContext(CounterContext)

  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: 'add',
          })
        }
      >
        Add One
      </button>
    </div>
  )
}

const SubOneButton = () => {
  const [, dispatch] = useContext(CounterContext)

  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: 'sub',
          })
        }
      >
        Subtract One
      </button>
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
