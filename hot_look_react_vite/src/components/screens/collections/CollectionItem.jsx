import React from 'react';
const CollectionItem = ({item}) => {
    return (
        <div key={item.id}>
            {item.title}
            <img src={item.photo} alt={item.photo} height="400" width="400"/>
        </div>
    );
};

export default CollectionItem;