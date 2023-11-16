import React, {useState} from "react";

//include images into your bundle
//create your first component
const Home = () => {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState([]);
	return (
		<div className="text-center">
			
			<input onChange={(evt) => setTodo(evt.target.value)} value={todo}/>
			<button onCLick={() => setTodos(prev =>[...prev, todo])}>Send</button>
			<ul>
				{todos.map((data, idx) => <li key={`${data}-${idx}`}>{data}</li>)}
			</ul>
		</div>
	);
};

export default Home;
