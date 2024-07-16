import { useState } from 'react';

function App() {

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



  localStorage.setItem("first name", firstName);
  localStorage.setItem("last name", lastName);
  localStorage.setItem("age", age)
  localStorage.setItem("email", email)

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
            value={lastName}
            type="text"
            onChange={e => setLastName(e.target.value)}
          />
        </div>

        <div>
          <label>Age: </label>
          <input
            value={age}
            type="text"
            onChange={e => setAge(e.target.value)}
          />
        </div>

        <div>
          <label>Email Address: </label>
          <input
            value={email}
            type="email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
