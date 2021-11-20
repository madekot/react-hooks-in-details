import { useState } from "react";

function FormField(props) {
  const {name, label, value, onChange, type = 'text' } = props;
  
  return (
    <div>
      <label htmlFor="firstName">{label}</label>
      <input 
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
} 

const DEFAULT_AGE = 21;

const initialState = {
  firstName: '',
  lastName: '',
  age: DEFAULT_AGE,
}

export function FormExample () {
  const [state, setState] = useState(initialState);

  const clear = () => {
    setState(initialState);
  };

  return (
    <>
      <form>
        <FormField 
          name="firstName"
          label="First Name"
          value={state.firstName}
          onChange={(newValue) => setState((prevState) => {
            return {
              ...prevState,
              firstName: newValue
            }
          })}
        />
        <FormField 
          name="lastName"
          label="Last Name"
          value={state.lastName}
          onChange={(newValue) => setState((prevState) => {
            return {
              ...prevState,
              lastName: newValue
            }
          })}
        />
        <FormField 
          name="age"
          label="age"
          value={state.age}
          type = "number"
          onChange={(newValue) => setState((prevState) => {
            return {
              ...prevState,
              age: newValue ? parseInt(newValue) : 0
            }
          })}
        />
      </form>
      <div>
        <button onClick={clear}>CLEAR</button>
      </div>
      <div>
        fistName: {state.firstName}, <br/>
        lastName: {state.lastName}, <br/>
        age: {state.age}
      </div>
    </>
  )
}