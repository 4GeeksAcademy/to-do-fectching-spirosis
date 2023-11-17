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


	useEffect(()=>{
		const request = async () =>{
			const res = await fetch("https://playground.4geeks.com/apis/fake/todos/user/spirosis",{
				method: "POST",
				body: JSON.stringify([]),
				headers: {
					"Content-Type": "application/json"
				}
			})
			const data = await res.json()
			console.log(data)
		}
		request()
	},[])
	

	useEffect(()=>{
		const request = async () =>{
			const res = await fetch("https://playground.4geeks.com/apis/fake/todos/user/spirosis")
			const data = await res.json()
			setTodos(data)
			console.log(data)
		}
		request()
	},[])
	// useEffect(() => {
	// 	const aPromise = new Promise((resolve, reject) => {
	// 		setTimeout(() => {
	// 			reject(true)
	// 		}, 1000)
	// 		console.log("afdterimte")
	// 	})
	// 	console.log(aPromise)
	// 	aPromise.then((data) => console.log(data, aPromise)).catch((err)=> console.log(err, aPromise))
	// }, [])

	return (
		<div className="text-center">
			
			<input onChange={handleOnChange} value={todo} />
			<button onClick={handleClick}>Send</button>
			<ul>
				{todos.map(({done, id, label}, idx) => 
				<li key={`${id}`}>
					{done && ["done"]}
					{label}
				<button onClick={handleFilter(idx)}>X</button>
				</li>)}
			</ul>
		</div>
	);
};

export default Home;
