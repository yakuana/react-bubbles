import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [user, setUser] = useState({ username: '', password: ''});
  

  const handleChange = event => setUser({...user, [event.target.name]: event.target.value});


  const handleSubmit = event => {
    event.preventDefault();
    axios
        .post('http://localhost:5000/api/login', user)

        .then(response => {
            // successful 
            console.log("post login api response object", response);
            
            // localStorage.setItem('token', response.data.payload);
        }) 

        .catch(error => {
            // unsuccessful 
            console.log("The api is currently down.", error.response);
        });
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={handleSubmit}>
        <input type="text"
              name="username"
              placeholder="username"
              onChange={handleChange} />
        <input type="text"
              name="password"
              placeholder="password"
              onChange={handleChange} />
        <button type="submit">Login</button>
    </form>

    </>
  );
};

export default Login;
