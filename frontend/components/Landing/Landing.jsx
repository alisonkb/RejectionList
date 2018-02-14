import React from 'react';
import { Link } from 'react-router-dom';

export default class Landing extends React.Component{
  render(){
    return(
      <section>
        Hi welcome to the landing page!
        <Link to='/login'>Log in</Link>
        <Link to='/signup'>Sign up</Link>
      </section>
    );
  }
}
