import { useState } from 'react';

function useMergedState(initialState) {
  const [state, setState] = useState(initialState);

  const mergeState = (changes) => {
    setState((prevState) => {
      return {
        ...prevState,
        ...changes,
      };
    });
  };

  return [state, mergeState];
}

function FormField(props) {
  const { name, label, value, onChange, type = 'text' } = props;

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
  );
}

const DEFAULT_AGE = 21;

const initialState = {
  firstName: '',
  lastName: '',
  age: DEFAULT_AGE,
};

export function FormExample() {
  const [state, setData] = useMergedState(initialState);

  const clear = () => {
    setData(initialState);
  };

  return (
    <>
      <form>
        <FormField
          name="firstName"
          label="First Name"
          value={state.firstName}
          onChange={(firstName) => setData({firstName})}
        />
        <FormField
          name="lastName"
          label="Last Name"
          value={state.lastName}
          onChange={(lastName) => setData({lastName})}
        />
        <FormField
          name="age"
          label="age"
          value={state.age}
          type="number"
          onChange={(age) => setData({age: age ? parseInt(age) : ''})}
        />
      </form>
      <div>
        <button onClick={clear}>CLEAR</button>
      </div>
      <div>
        fistName: {state.firstName}, <br />
        lastName: {state.lastName}, <br />
        age: {state.age}
      </div>
    </>
  );
}
