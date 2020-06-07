import React, { ChangeEvent, MouseEvent } from 'react';

interface AddItemBlockProps {
    toDoList: ListItem[],
    setToDoList: Function
}

const AddItemBlock: React.FC<AddItemBlockProps> = (props) => {
    const { toDoList, setToDoList } = props;

    const [newItemText, setNewItemText] = React.useState<string>();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewItemText(e.currentTarget.value);
        console.log(e.currentTarget.value)
    }

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(e.currentTarget.name);
    }
    return (
        <div>
            <input type="text" onChange={handleChange} value={newItemText} />
            <button name="add-item" onClick={handleClick}>Add Item</button>
        </div>
    );
}

export default AddItemBlock;