import React from 'react';
import { Modal}  from './components/Modal/Modal';
import { Button } from './components/ButtonComponent/ButtonComponent';
import loadingGif from './assets/loading.gif';

function App(){
  const [isModalOpen, setModalState] = React.useState(false);
  const toggleModal = () => setModalState(!isModalOpen);
  	  return (
      <div className="App">	    
       <Button
        onClick={toggleModal} text="Parse" buttonType="positive" size="small"
      />
      <Modal
        title='Processing results...'
        isOpen={isModalOpen}
        onClose={toggleModal}
        image={loadingGif}
      />
    </div>	    
  );	  
}	

export default App;