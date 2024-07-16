import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  /*when component first renders, React calls 
  this function that's passed to the useState
  to determine the initial state value.
  The value associated with the key "first name"
  is returned as the state value for firstName
  Function is assigned to state variable instead
  of empty string*/
  const [firstName, setFirstName] = useState(() => {
    return localStorage.getItem("first name")
  });
  const [lastName, setLastName] = useState(() => {
    return localStorage.getItem("last name")
  });
  const [age, setAge] = useState(() => {
    return localStorage.getItem("age")
  });
  const [email, setEmail] = useState(() => {
    return localStorage.getItem("email")
  });

  console.log("first name:", firstName)
  console.log("last name:", lastName)
  console.log("age:", age)
  console.log("email:", email)


  /*because setItem is in useEffect it 
  will only be called when when the state variable
  changes and not on every render */
  useEffect(() => {
    localStorage.setItem("first name", firstName);
  }, [firstName]);
  useEffect(() => {
    localStorage.setItem("last name", lastName);
  }, [lastName]);
  useEffect(() => {
    localStorage.setItem("age", age)
  }, [age]);
  useEffect(() => {
    localStorage.setItem("email", email)
  }, [email]);

  return (
    <>
      <h2>Information</h2>
      <form>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)} />
        </div>

        <div>
          <label>Last Name: </label>
          <input
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </div>

        <div>
          <label>Age: </label>
          <input
            type="text"
            value={age}
            onChange={e => setAge(e.target.value)}
          />
        </div>

        <div>
          <label>Email Address: </label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
