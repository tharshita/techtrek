import React, { useEffect, useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import axios from 'axios';


function Login(props) {
    const [user, setUser] = useState("");
    const [pw, setPw] = useState("");

    useEffect(() => {
        //auth()
      }, []);

    const listenPassword = (event) => {
    event.preventDefault();
    setPw(event.target.value)
    }
    const listenUser = (event) => {
        event.preventDefault();
        setUser(event.target.value)
        }

    const auth = async () => {
    let formData = new FormData();
    console.log(user, pw)
    formData.append('username', user)
    formData.append('password', pw)
    const config = {
        headers: {
            'content-type': 'application/form-data'
        }
    }
    const result = await axios.post(
        'http://dbstechtrek.duckdns.org/process_login.php', formData, config
    );
    console.log(result.data)
    };

    return (
      <Container>
          <div>
          <label>Username</label>
          <input type= 'text' placeholder = 'username' id="username" onChange={listenUser}></input></div>
          <div>
          <label>Password</label>
          <input type= 'text' placeholder = 'password' id="password" onChange={listenPassword}></input></div>
          <Button type="submit" onClick={auth}>Login</Button>
      </Container>
    );
  }
   

export default Login;