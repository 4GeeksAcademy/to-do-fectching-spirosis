import React, {useEffect, useState} from "react";

//include images into your bundle
//create your first component
const Home = () => {
	const [todo, setTodo] = useState('')
	const [todos, setTodos] = useState([])

	const handleClick = () => {
		setTodos(prev=> [...prev, todo])
		setTodo('')
	}
	const handleOnChange = (evt) => setTodo(evt.target.value)
	const handleFilter = (idx)=> () => { 
		setTodos(todos.filter((_, todoIdx)=> 
		todoIdx !== idx))
	}
	
	return (
		<div className="text-center">
			
			<input onChange={handleOnChange} value={todo} />
			<button onClick={handleClick}>Send</button>
			<ul>
				{todos.map((data, idx) => <li key={`${data} - ${idx}`}>{data}
				<button onClick={handleFilter(idx)}>X</button>
				</li>)}
			</ul>
		</div>
	);
};

export default Home;
