import React, { Component } from 'react';
import './App.css';
import App from './App';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
class Google extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          status : false
         }
    }
    // componentDidMount(){
      
        
    //          if(this.state.status === true){
    //           <App />   
    //         }else{
    //           <div> something worng!!!!!!!!</div>
    //         }  
            
      
    // }
    render() { 
        return (<div>
            
  
  
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/App"><button className='g-signin2' onClick={this.setState({
    status : !this.state.status
  })}></button></Link>
        </li>
       
      </ul>
      <Route exact path="/" component={Google} />
      <Route path="/App" component={App} />
    </div>
  </Router>
            
  </div>);
    }
}
 
export default Google;

