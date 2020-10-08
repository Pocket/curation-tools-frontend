import React from 'react';
import Button from '@material-ui/core/Button'

class Logo extends React.Component
{
   render(){
    return(
       <div>
          <img src={require("./images/pocket.png")} alt="pocket-logo" width="150" height="200" margin-top="auto"></img>
          <div>
            <Button color="primary" variant="contained" >DIKSHA GUPTA</Button>
          </div>
          
       </div>

   )
  }
}
export default Logo;