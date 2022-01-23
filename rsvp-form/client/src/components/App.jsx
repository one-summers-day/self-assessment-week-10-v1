import React from 'react';
import RegisterForm from './RegisterForm.jsx'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }

  render(){
    return(
      <div className = "main">
        <RegisterForm />
      </div>
    )
  }
}

export default App;
