//When the user visits the page, a small form should appear allowing a user to input their name and a message [x]

//When the user clicks the submit button, it should send an ajax request to the server and display the


//Need to write an ajax function and send a request to the server, server being sent is 
//Need a way to store the data that's being typed in 
  //Need to write a function that senses the click event 
    //Once this thing is clicked send a cascading effect down to change other things

//Render everything at the end 
//Response on the screen
import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

class App extends React.Component {
  constructor(props) {
  super(props);

//Need to initialize the original state with the name and message properties;
  this.state = {
    name: "",
    message: "",
    response: ""
  };
  //Necessary to make this work in the callback
  this.handleNameChange = this.handleNameChange.bind(this);
  this.handleMessageChange = this.handleMessageChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this);
}

  handleNameChange(event){
    this.setState({
      name: event.target.value
    })
  }

  handleMessageChange(event){
    this.setState({
      message: event.target.value      
    })
  }


  handleSubmit(event){
    event.preventDefault();

    var newMessage = {
      'name': this.state.name,
      'message': this.state.message
    }
    this.setState({response: newMessage})

    $.ajax({
      url: "http://ec2-13-57-25-101.us-west-1.compute.amazonaws.com:3000/api/hrsf110/greeting",
      type: 'POST',
      data: JSON.stringify(newMessage),
      contentType: 'application/json',
      success: function(){
        console.log("message receieved", newMessage);
      },
      error: function(){
        console.log("message failed, try again", newMessage)
      }
    })  
  };
  

  // //Need to create a variable to hold the current name and message to stringify




    
  // //Need to set up the ajax server to receive the message, only need to access the server when the click event occurs
  
    // event.preventDefault();
  

  render() {

    return(
    <div>

      <label> Name:    
        <input
          type = "text"
          value = {this.state.name}
          onChange = {this.handleNameChange}
        />  
           Message:
        <input 
          type = "text"
          value = {this.handleSubmit.message}
          onChange = {this.handleMessageChange}           
        />       
      </label>   
  	    <button onClick={this.handleSubmit}>Send Message</button>
      <div>  {this.state.response} </div>

    </div>
  );


  }
}


export default App; 