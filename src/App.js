import { useState } from 'react';
import { useEffect } from 'react';
import "./index.css"

function App() {

  /*when component first renders, React calls
  this function that's passed to the useState
  to determine the initial state value.
  The value associated with the key "first name"
  is returned as the state value for firstName
  Function is assigned to state variable instead
  of empty string*/
  const [firstName, setFirstName] = useState(() => {
    return localStorage.getItem("first name") ;
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

  const [displayName, setDisplayName] = useState("")
  const [displayLast, setDisplayLast] = useState("")
  const [displayAge, setDisplayAge] = useState("")
  const [displayEmail, setDisplayEmail] = useState("")

  console.log("first name:", firstName)
  console.log("last name:", lastName)
  console.log("age:", age)
  console.log("email:", email)

  /*because setItem is in useEffect it
  will only be called when when the state variable
  changes and not on every render */
  useEffect(() => {
    localStorage.setItem("first name", firstName);
    localStorage.setItem("last name", lastName);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);
  }, [firstName, lastName, age, email]);

  const handleClick = e => {
    e.preventDefault();
    setDisplayName(firstName);
    setFirstName("");
    setDisplayLast(lastName);
    setLastName("");
    setDisplayAge(age);
    setAge("");
    setDisplayEmail(email);
    setEmail("");

  }
  return (
    <div className="body">``
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

        <button
        onClick={e => handleClick(e)}
        >Submit</button>
      </form>
      {displayName && <p>{displayName}</p>}
      {displayLast && <p>{displayLast}</p>}
      {displayAge && <p>{displayAge}</p>}
      {displayEmail && <p>{displayEmail}</p>}
    </div>
  );
}

export default App;
