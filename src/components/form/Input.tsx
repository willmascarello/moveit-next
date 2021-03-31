import React from 'react';

const Input = (props) => {
  return (
    <>
      {props.label ? <label htmlFor={props.id}>props.label</label> : ''}
      <input 
        id={props.id} 
        type= {props.type ?? 'text'}
        name={props.name} 
        placeholder={props.placeholder} 
        value={props.value}
        onChange={({target}) => props.setValue(target.value)}
        required= {props.required ?? ''}
      />
    </>
  )
}

export default Input