import React, { Component } from 'react';
import NavBar from './components/navbar'
import Counters from "./components/counters"
import './App.css';

class App extends Component {

  state = { 
    counters:[
        {id:1,value:4},
        {id:2,value:2},
        {id:3,value:0},
        {id:4,value:0}
    ]
 };

 constructor(){
   super();
   console.log("App - constructor");
 }

 componentDidMount(){
   //ajax call
   console.log("app - mounted")
 }

 handleDelete = counterID =>{
     const counters = this.state.counters.filter(c =>c.id !==counterID); //to get all the counters except the one you given to 
     this.setState({counters});
 };
 handleIncrement = counter =>{
    const counters = [...this.state.counters]; //spread operator 
    const index = counters.indexOf(counter);
    counters[index] = {...counter}; //You can spread the props attributes which passes the whole props object.
    counters[index].value++;
    this.setState({counters})
 }
 handleReset =() =>{
    console.log("hello")
    const counters = this.state.counters.map(c =>{
        c.value = 0;
        return c;
    });
    this.setState({counters});
};


  render() { 
    console.log("app - render");
    return ( 
      <React.Fragment>
      <NavBar totalCounters ={this.state.counters.filter(c=>c.value>0).length}>hello</NavBar>
      <main className = "container">
      <Counters
      onReset ={this.handleReset} 
      onIncrement = {this.handleIncrement}
       onDelete={this.handleDelete} 
       counters = {this.state.counters}>
         
       </Counters>
      </main>
      </React.Fragment> );
  }
}
 
export default App;
