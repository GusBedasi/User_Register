import React from 'react';

import './styles.css';

import axios from '../../../services/api';

function EditButton (row) {

    async function updateUser(){
        axios.put('/update/', row.data.id).then(response => {
            console.log(response);
        }) 
    }

    return (
        <button className="edit-button" onClick={updateUser}>Editar</button>
    );
}

export default EditButton;