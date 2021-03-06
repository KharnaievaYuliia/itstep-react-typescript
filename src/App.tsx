import React from 'react';
import ToDoList from './Components/toDoList';
import AddItemBlock from './Components/addItemBlock/addItemBlock';

const App = () => {
  const [toDoList, setToDolist] = React.useState<ListItem[]>([]);

  return (
    <div>
      <ToDoList toDoList={toDoList} />
      <AddItemBlock toDoList={toDoList} setToDoList={setToDolist} />
    </div>
  );
}

export default App;
