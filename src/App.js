import React from 'react';
import 'bulma/css/bulma.css';
import NavBar from './navbar/Navbar'
import Signup from './signup/Signup'

const App = () => {
  return (
    <div>
      <NavBar />
      <Signup/>
      <Message isInfo title='Hello World'>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
</Message>
    </div>
  
  )
};

export default App;
