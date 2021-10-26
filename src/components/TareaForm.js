import React, {useState} from 'react'

function TareaForm(props) {
    const [inputText, setInputText] = useState('')
    const [validacion, setValidacion] = useState(true)

    const manejarFormulario = (e) =>{
        setInputText(e.target.value)
    }

    const submit = (e) =>{
        e.preventDefault()
        if(inputText.trim() !== ''){
            props.nuevaTarea(inputText);
            setInputText('');
            setValidacion(true)
        } else {
            setValidacion(false)
        }
    }
    return (
        <div className="container px-0">
            <div className="row">
            <form className="form row mb-3 pe-0" onSubmit={submit}>
                <div className="col">
                <input
                    className="form-control" 
                    value={inputText} 
                    onChange={manejarFormulario}
                    placeholder="What's new to be done?"/>
                </div>
                <div className="col col-lg-3 px-0">
                    <button type="submit" className="btn btn-dark">Add task</button>
                </div>
            </form>
            {
                !validacion &&
                <div className='validacion'>Add a new task, please</div>
            }
            </div>
        </div>
    )
}
export default TareaForm