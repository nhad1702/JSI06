import React from 'react';
import tdInput from './Todoinput';
import tdList from './Todolist';

const tdC = () => {
    return [
        <div>
        <tdInput />
        <tdList />
    </div>
    ];
};

export default tdC;