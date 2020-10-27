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
      <Button text=" Add Story " size="large" buttonType="positive"/>
      <Button text=" Log Out " size="small" buttonType="hollow"/>
      </Container>
      <Container>
      <Button text=" Reject " size="small" buttonType="negative"/>
      <Button text=" Snooze " size="medium" buttonType="neutral"/>
      <Button text=" Edit & Approve " size="large" buttonType="positive"/>
      </Container>
    </div>
  );
}

export default App;
