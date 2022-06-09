import PropTypes from 'prop-types';
import React, { useState } from 'react'

const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit');
        if (inputValue.trim().length > 2) {
            setCategories((categories) =>  [ inputValue, ...categories ]);
            setInputValue('');
        }

    };
  return (
    <form onSubmit={ handleSubmit }>

        <h1>{ inputValue }</h1>
        <input
            type="text"
            value={inputValue}
            onChange={ handleInputChange }
        ></input>
    </form>
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
