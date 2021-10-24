import React from 'react'
import { useGlobalContext } from './context'


const Modal = () => {
    const {correct} = useGlobalContext();

    const reload = ()=>{
        window.location.reload();

    }
    return (
        <div id='modal-container'>
            <div className="modal-content">
            <h1 className='modaltext'>Congrats!</h1>
            <p className='modaltext'>You answered <strong>{correct}</strong> questions correctly</p>
            <button onClick={reload} className="next-question">Play Again</button>
            </div>
        </div>
    )
}

export default Modal
