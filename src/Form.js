import React from 'react';
import './Form.css';

function Form({value , setValue , setQuery}) {
    
    const changeValue = e => {
        setValue(e.target.value)
    }
    
    const getSearch = e => {
        e.preventDefault()
        setQuery(value)
        setValue('')
    }
    return (
        <div className="form-container">
            <form className="form" onSubmit={getSearch}>
                <input className="search-form" type="text" value={value} onChange={changeValue} />
                <button className="btn-form" type="submit">SEARCH</button>
            </form>
        </div>
    )
}

export default Form
