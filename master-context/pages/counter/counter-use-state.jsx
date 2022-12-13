import { useState } from "react"

const Container = ({children}) => {
	return (
		<div>
			{children}
		</div>
	)
}

const AddOneButton = ({setCounter}) => {
	return (
		<div>
			<button onClick={() => setCounter(prev => prev + 1)}>Add One</button>
		</div>
	)
}

const Counter = ({count}) => {
	return (
		<div>Counter: {count}</div>
	)
} 

const CounterUseState = () => {
	const [counter, setCounter] = useState(0)

	return (
		<div>
			<Container>
				<AddOneButton setCounter={setCounter}/>
			</Container>
			<Counter count={counter}/>
		</div>
	)
}

export default CounterUseState

