import React from 'react';
import Item from './item';

interface ToDoListProps {
    toDoList: ListItem[]
}

const ToDoList: React.FC<ToDoListProps> = (props) => {
    const { toDoList } = props;

    if (!toDoList) return <div>No tasks</div>;

    return (
        <div>
            {toDoList.map((item: ListItem) => {
                return <Item key={item.id} item={item}></Item>;
            })}
        </div>
    );
};

export default ToDoList;