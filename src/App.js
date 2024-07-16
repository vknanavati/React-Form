import { useState } from 'react';

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  console.log("first name:", firstName)
  console.log("last name:", lastName)
  console.log("age:", age)
  console.log("email:", email)

  return (
    <>
      <form>
        <div>
          <label>First Name: </label>
          <input
            onChange={e => setFirstName(e.target.value)} />
        </div>

        <div>
          <label>Last Name: </label>
          <input
            onChange={e => setLastName(e.target.value)}
          />
        </div>

        <div>
          <label>Age: </label>
          <input
            onChange={e => setAge(e.target.value)}
          />
        </div>

        <div>
          <label>Email Address: </label>
          <input
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
