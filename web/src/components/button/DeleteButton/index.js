import React from 'react';

import './styles.css';

import axios from '../../../services/api';

function DeleteButton (row) {

    async function deleteUser(){
        axios.delete('/delete/' + row.data.id)
        .then(response => {
            console.log(response);
        })
    }

    return (
        <button className="delete-button" onClick={deleteUser}>Delete</button>
    );
}

export default DeleteButton;