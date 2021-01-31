import React from 'react';
import Header from './Header';
import Main from './Main';
import Introduce from './Introduce';
import Hobby from './Hobby';
import Challenge from './Challenge';
import Footer from './Footer';
import './style.css'

class App extends React.Component{
  render(){

    return(
      <div>
        <Header />
        <Main />
        <Introduce />
        <Hobby />
        <Challenge />
        <Footer />
      </div>
    )
  }
}

export default App;
