import React from 'react';

const EmployeeDetail = ({employee}) =>{

const {name,email,phone,avatar,id} = employee;

    return (

        <div className="thumbnail" key={id}>
            <img src={avatar} />
            <div className="caption">
            <h3>{name}</h3>
            <ul className="list-group">
                <li className="list-group-item">Email:{email}</li>
                <li className="list-group-item">Name:{name}</li>
                <li className="list-group-item">Phone:{phone}</li>
            </ul>
        </div>
    </div>
    );

}

export default EmployeeDetail;