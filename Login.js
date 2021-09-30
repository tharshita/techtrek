import React, { useEffect, useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import axios from 'axios';


function Login(props) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers()
      }, []);

      const fetchUsers = async () => {
        const result = await axios.get(
          'link',
        );
        console.log(result.data)
        setUsers(result.data)
      };

    return (
      <Container>
          <div>
          <label>Username</label>
          <input type= 'text' placeholder = 'username'></input></div>
          <div>
          <label>Password</label>
          <input type= 'text' placeholder = 'password'></input></div>
          <Button>Login</Button>
      </Container>
    );
  }
   

export default Login;