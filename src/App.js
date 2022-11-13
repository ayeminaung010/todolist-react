import './App.css';
import List from './components/List/List';
import {useState} from 'react';
import Form from './components/Form/Form';
import { v4 as id } from 'uuid';


const App = () => {
  
  const [intialState,setIntialState] = useState([
    {task:'homeword',id : 1,isDone:false},
    {task:'Eat',id : 2,isDone:false},
    {task:'Drink',id : 3,isDone:false},
  ]);
  
  const HandleCLick = (text) =>{

    const newData = {};
    newData.task = text;
    // newData.id = Math.random( Date.now()) * 10000000000000000;
    newData.id = id();
    newData.isDone = false;
    setIntialState([
      ...intialState,newData
    ]);
    
  }

  const HandleCheck =(id) =>{
    // console.log(id);
    setIntialState(
      intialState.map(i => i.id === id ? {task:i.task,id: i.id, isDone : !i.isDone} : i)
    )
  }
  const HandleDelete = (id) =>{
    // console.log(id);
    setIntialState(intialState.filter(i => i.id !== id ))
  }

  const HandleEdit= (id) =>{
    // console.log(id);
    const oldValue = intialState.find(i => id === i.id  );
    const value = prompt("Enter Your Task..",oldValue.task);
    if( value){
      setIntialState(intialState.map(i => i.id === id ? {task:value,id: i.id, isDone : false} :i ))
    }
  }

  return (
    <div className='container'>
      <h1 >To Do List</h1>
      <Form onSubmit={HandleCLick} />
      {intialState.map((i) => <List key={i.id} data={i.task} id={i.id} isDone={i.isDone} onChecked={HandleCheck} onDelete={HandleDelete} onEdit={HandleEdit}/>)}
    </div>
  );
}

export default App;
