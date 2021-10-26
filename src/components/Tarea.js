import React from 'react';

const Tarea = (props) => {
    const borrarTarea = () =>{
        props.borrar(props.id);

    }
    return (
        <>
            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                <span className="span">
                    {props.tarea}
                </span>
                <div>
                <span>
                    <i
                        onClick={borrarTarea}
                        className="far fa-trash-alt">
                    </i>
                </span>
                </div>
            </li>
            
            
        
        
        </>
    )
}

export default Tarea