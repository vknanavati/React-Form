import { useState, useEffect } from 'react';
import { Container, Button, TextField, Grid, Paper, Typography } from '@mui/material';


function App() {

  /*when component first renders, React calls
  this function that's passed to the useState
  to determine the initial state value.
  The value associated with the key "first name"
  is returned as the state value for firstName
  Function is assigned to state variable instead
  of empty string*/
  const [firstName, setFirstName] = useState(() => {
    return localStorage.getItem("first name") || "";
  });
  const [lastName, setLastName] = useState(() => {
    return localStorage.getItem("last name") || "";
  });
  const [age, setAge] = useState(() => {
    return localStorage.getItem("age") || "";
  });
  const [email, setEmail] = useState(() => {
    return localStorage.getItem("email") || "";
  });

  const [displayName, setDisplayName] = useState("")
  const [displayLast, setDisplayLast] = useState("")
  const [displayAge, setDisplayAge] = useState("")
  const [displayEmail, setDisplayEmail] = useState("")
  const [disableBtn, setDisableBtn] = useState(true)

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

  // useEffect switch disable button on/off
  // check if every input in NOT empty

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
    <Container>
      <Paper elevation={3} sx={{ padding: 2, marginTop: 5 }}>
      <Grid
          container
          spacing={3}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ marginBottom: 2 }}
          >
          <form>
            <Grid sx={{ marginBottom: 2, marginTop: 5 }} item xs={12} >
              <Typography variant="h3">Information</Typography>
            </Grid>
            <Grid sx={{ marginBottom: 2}} item xs={12}>
              <TextField
                label={<Typography variant="h6">First Name</Typography>}
                variant="outlined"
                type="text"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                fullWidth
                />
            </Grid>
            <Grid sx={{ marginBottom: 2 }} item xs={12}>
            <TextField
              label={<Typography variant="h6">Last Name</Typography>}
              variant="outlined"
              type="text"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              fullWidth
            />
            </Grid>
            <Grid sx={{ marginBottom: 2 }} item xs={12}>
              <TextField
                label={<Typography variant="h6">Age</Typography>}
                variant="outlined"
                type="text"
                value={age}
                onChange={e => setAge(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid sx={{ marginBottom: 2 }} item xs={12}>
              <TextField
                label={<Typography variant="h6">Email</Typography>}
                variant="outlined"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                fullWidth
              />
          </Grid>
          <Grid sx={{ marginBottom: 2 }} item xs={12} container justifyContent={"center"} >
            <Button
            variant="contained"
            size="large"
            type="submit"
            onClick={e => handleClick(e)}
            // disabled={disabledBtn}
            >
            Submit
            </Button>
          </Grid>
        </form>
      </Grid>
      </Paper>
        {displayName && <p>{displayName}</p>}
        {displayLast && <p>{displayLast}</p>}
        {displayAge && <p>{displayAge}</p>}
        {displayEmail && <p>{displayEmail}</p>}
    </Container>
  );
}

export default App;
