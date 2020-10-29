import React from 'react';
import { Button } from './components/ButtonComponent';
import './App.css';
import styled from "styled-components";

const Container = styled.div`
display:flex;
`;

function App() {
  return (
    <div className="App">
      <Container>
      <Button text=" Add Story " variant="contained" size="large"  buttonType="positive"/>
      <Button text=" Log Out " variant="outlined" size="small"  buttonType="hollow"/>
      </Container>
      <Container>
      <Button text=" Reject " variant="contained" size="small"  color="secondary"/>
      <Button text=" Snooze " variant="contained" size="medium" buttonType="neutral"/>
      <Button text=" Edit & Approve " variant="contained" size="large" buttonType="positive"/>
      </Container>
    </div>
  );
}

export default App;
