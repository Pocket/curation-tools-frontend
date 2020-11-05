import React from 'react';
import { ModalComponent } from './components/ModalComponent';
import { Button } from './components/Button';

import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';

const Container = styled.div`
margin-left: 10px
`;
function App(){
  const [isModalOpen, setModalState] = React.useState(false);
  const toggleModal = () => setModalState(!isModalOpen);
  return (
    <div className="app">
      <Button
        onClick={toggleModal} text="Parse" buttonType="positive" size="small"
      />
      <ModalComponent
        title={'Data is loading'}
        isOpen={isModalOpen}
        onClose={toggleModal}
      >
        <Container>
          <CircularProgress/>
        </Container>
      </ModalComponent>
    </div>
  );
};
export default App;