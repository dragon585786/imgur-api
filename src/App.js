import React, { Component } from 'react';
import './App.css';


// 169207352929-mhimarga4qrtd38sp334f2krodoilnln.apps.googleusercontent.com

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      image_p : '',
      id : 'OUHDm',
     }
    this.image_f = this.image_f.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  image_f(){
    // const r = new XMLHttpRequest();
    // const client_id = 'ec982c0bdb7af43';
    // https://api.imgur.com/3/image_f/{id}
    // r.open('GET', 'https://api.imgur.com/3/image_f/');
    // r.setRequestHeader('Authorization', `Client-ID ${client_id}`);
    const finalURL = `https://api.imgur.com/3/image/${this.state.id}`;
    console.log(finalURL,'sup')
    fetch(finalURL, {
      method: 'GET', 
       headers: {
         "Authorization": "client-ID ec982c0bdb7af43",
         
      }
          // body: JSON.stringify(body)
    }).then(response => {
        console.log('SANDESH ', response)
      response.json().then(data =>{
        console.log("result from fetch",data)
        this.setState({
          image_p : data.data.link,
        })
      }) 
      
       })
    
  }
  handleClick(event){
    const e = event.target.value;
    this.setState({
      id : e
    })
    
  }
  render() { 
   
    return ( <div>
    <div className='centerp'> <input type='text' name='search ' placeholder='ENTER THE ID OF IMAGE' onChange={this.handleClick}/>
<button className='button5' onClick={this.image_f}>
  Click Here
</button></div>
    
{
  this.state.image_p ? ( <span className='img-j'>
  
<img alt='images' className='img-p' src={this.state.image_p} />
  </span>) : (<span>

  </span>)
}

    </div> );
  }
}
 
export default App;






