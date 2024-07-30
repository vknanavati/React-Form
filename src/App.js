import { useState, useEffect } from 'react';
import { Container, Button, TextField, Grid, Paper, Typography } from '@mui/material';
import "./App.css"


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
  const [firstNameError, setFirstNameError] = useState(false)
  const [lastNameError, setLastNameError] = useState(false)
  const [ageError, setAgeError] = useState(false)
  const [emailError, setEmailError] = useState(false)

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

  useEffect(()=>{
    if (firstName && lastName && age && email){
      setDisableBtn(false)
    } else {
      setDisableBtn(true)
    }
  },[firstName, lastName, age, email])

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

    const nameRegex =  /^[A-Za-z]+$/;

    if (!nameRegex.test(firstName)) {
      setFirstNameError(true)
    } else {
      setFirstNameError(false)
    }

    if (!nameRegex.test(lastName)) {
      setLastNameError(true)
    } else {
      setLastNameError(false)
    }

    const numberRegex =  /^-?\d+$/;

    if (!numberRegex.test(age)) {
      setAgeError(true)
    } else {
      setAgeError(false)
    }

    const emailRegex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!emailRegex.test(email)) {
      setEmailError("Invalid email")
    } else {
      setEmailError("")
    }
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
                error={firstNameError}
                helperText={firstNameError && "letters only"}
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
                error={lastNameError}
                helperText={lastNameError && "letters only"}
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
                error={ageError}
                helperText={ageError && "numbers only"}
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
                error={emailError}
                helperText={emailError && "invalid email"}
              />
          </Grid>
          <Grid sx={{ marginBottom: 2 }} item xs={12} container justifyContent={"center"}>
            <Button
              variant="contained"
              size="large"
              type="submit"
              onClick={e => handleClick(e)}
              disabled = {disableBtn}
            >
              Submit
            </Button>
          </Grid>
        </form>
        {/* <Grid item>
          <Grid>
            {firstNameError && <Typography color={"red"} fontSize={25} margin={1}>{firstNameError} </Typography>}
          </Grid>
          <Grid>
            {lastNameError && <Typography color={"red"} fontSize={25} margin={1}>{lastNameError} </Typography>}
          </Grid>
          <Grid>
            {ageError && <Typography color={"red"} fontSize={25} margin={1}>{ageError} </Typography>}
          </Grid>
          <Grid>
            {emailError && <Typography color={"red"} fontSize={25} margin={1}>{emailError} </Typography>}
          </Grid>
        </Grid> */}
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
