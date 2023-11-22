import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import './App.css';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = () => {
    // Your signup logic goes here
    setMessage('Signup functionality will be implemented soon!');
  };

  const handleLogin = () => {
    // Your login logic goes here
    setMessage('Login functionality will be implemented soon!');
  };

  return (
    <AppWrapper>
      <Header>
        <h1>Your Website</h1>
      </Header>

      <DescriptionContainer>
        <Description>
          <h2>Welcome to Your Website</h2>
          <p>Discover a world of positivity and inspiration. Join us to stay informed about uplifting stories that make a difference in your day.</p>
        </Description>
      </DescriptionContainer>

      <AuthContainer>
        <AuthSection>
          <h2>Sign Up</h2>
          <Input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <Button onClick={handleSignup}>Sign Up</Button>
        </AuthSection>

        <AuthSection>
          <h2>Login</h2>
          <Input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <Button onClick={handleLogin}>Login</Button>
        </AuthSection>
      </AuthContainer>

      <Message>
        <p>{message}</p>
      </Message>

      <GlobalStyles />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Header = styled.header`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
`;

const DescriptionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const Description = styled.div`
  max-width: 600px;
  text-align: center;
`;

const AuthContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 40px;
  flex-wrap: wrap;
`;

const AuthSection = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  margin: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #555;
  }
`;

const Message = styled.div`
  margin-top: 20px;
  text-align: center;
  color: green;
`;

export default App;