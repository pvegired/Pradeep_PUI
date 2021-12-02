import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../firebase";
import React, { useState, useRef, useEffect, useContext } from "react";
import Form from "./Form";
import FilterButton from "./FilterButton";
import Todo from "./Todo";
import { nanoid } from 'nanoid';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const PERSONAL = [
  { id: "todo-0", name: "Call David", completed: true },
  { id: "todo-1", name: "Submit Registration Form", completed: false },
  { id: "todo-2", name: "Meet Linda", completed: false }
];

// const MAINTENANCE = [
//   { id: "todo-0", name: "6 hrs of Sleep", completed: true },
//   { id: "todo-1", name: "40 mins of Exercise", completed: false },
//   { id: "todo-2", name: "15 mins of Meditation", completed: false }
// ];

// const BAREMINIMUM = [
//   { id: "todo-0", name: "Attend All Classes", completed: true },
//   { id: "todo-1", name: "3hrs of Assignments", completed: false },
//   { id: "todo-2", name: "1hr of Job Search Efforts", completed: false }
// ];

// const EXCEED = [
//   { id: "todo-0", name: "Publish a Blog", completed: true },
//   { id: "todo-1", name: "1 hr of Coursera", completed: false },
// ];

// const masterList = [PERSONAL, MAINTENANCE, BAREMINIMUM, EXCEED];

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

const Dashboard = () =>  {

const [date, setDate] = useState(new Date());

const [tasks, setTasks] = useState(PERSONAL);
// const [tasks, setTasks] = useState(masterList);
const [filter, setFilter] = useState('All');

function toggleTaskCompleted(id) {
  const updatedTasks = tasks.map(task => {
    // if this task has the same ID as the edited task
    if (id === task.id) {
      // use object spread to make a new obkect
      // whose `completed` prop has been inverted
      return {...task, completed: !task.completed}
    }
    return task;
  });
  setTasks(updatedTasks);
}


function deleteTask(id) {
  const remainingTasks = tasks.filter(task => id !== task.id);
  setTasks(remainingTasks);
}


function editTask(id, newName) {
  const editedTaskList = tasks.map(task => {
  // if this task has the same ID as the edited task
    if (id === task.id) {
      //
      return {...task, name: newName}
    }
    return task;
  });
  setTasks(editedTaskList);
}

const taskList = tasks
.filter(FILTER_MAP[filter])
.map(task => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
    toggleTaskCompleted={toggleTaskCompleted}
    deleteTask={deleteTask}
    editTask={editTask}
  />
));

const filterList = FILTER_NAMES.map(name => (
  <FilterButton
    key={name}
    name={name}
    isPressed={name === filter}
    setFilter={setFilter}
  />
));

function addTask(name) {
  const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
  setTasks([...tasks, newTask]);
}


const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
const headingText = `${taskList.length} ${tasksNoun} remaining`;

const listHeadingRef = useRef(null);
const prevTaskLength = usePrevious(tasks.length);

useEffect(() => {
  if (tasks.length - prevTaskLength === -1) {
    listHeadingRef.current.focus();
  }
}, [tasks.length, prevTaskLength]);

const { currentUser } = useContext(AuthContext);
if (!currentUser) {
  return <Redirect to="/" />;
}
  return (
    <div>
      <div>
        <a href ="#">Logo</a>
        <br></br>
        <a href ="#">To Do</a>
        <br></br>
        <a href ="#">Insights</a>
        <br></br>
        <a onClick={() => firebaseConfig.auth().signOut()}>Sign out</a>
        <br></br>
      </div>
      <div>
         <DatePicker 
        selected={date} 
        onChange={date => setDate(date)} />

        <h1>Your current score for the day is 60/100</h1>
        <br></br>
        <br></br>
        <br></br>
        <h3>Est. time to finish remaining tasks - 04:30:16</h3>
        <h3>Time Left for today                                - 08:24:44</h3>

      </div>
      
      <section className="todoapp stack-large">
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
        {headingText}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
      <div>
     
      </div>
    </section>
    </div>

    
  );
}

export default Dashboard;


