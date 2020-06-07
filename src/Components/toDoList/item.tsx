import React from "react";

interface ItemProps {
    item: ListItem
}

const Item: React.FC<ItemProps> = (props) => {
    const { item } = props;

    return (
        <div>

        </div>
    );
}

export default Item;