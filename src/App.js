import { useState } from 'react';
import './App.css';

const Listdata = ({title}) => {
	return (
	  <div className='list-data'>
		{title}
	  </div>
	);
};

const App = () => {
	const[todos, setTodos] = useState([]);
	const[newTodo, setNewTodo] = useState('');	
	
	const handleChange = (event) => {
		setNewTodo(event.target.value);
	};
	
	const addNewTodo = () => {
		setTodos([...todos, { title: newTodo, id: Date.now()}]);
	};
	return (

		<div className='container'>
      <div className='form'>
        <input value={newTodo} onChange={handleChange} />
        <button onClick={addNewTodo}>Add</button>
      </div>
    
			<h1>Todo List</h1>

			<div className="list-container">
				{todos.map((todo) => {
					return (
						<Listdata
							title={todo.title} 
							key={`todo-${todo.id}`}/>
					);
				})}
			</div>
			
		</div>
    );
};

export default App;