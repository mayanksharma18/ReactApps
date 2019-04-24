import React from 'react';
import ReactDOM from 'react-dom'
import { setInterval } from 'timers';


const name="Mayank"

function users(user) {
    return user.firstname +""+user.lastname
    
}
var data={
    firstname:"Mayank",
    lastname:"Sharma"
}

function check(user){
    if(user){

        return <h1>{users(user)}</h1>
    }
    return "HEllo Stranges";
}


// const ele=function (){
//   return(
//         <div>
//         <h1> The current time is:</h1>
//         <h2>{new Date().toLocaleTimeString()}</h2>
//         </div>
//   )


// }


function Welcome(props){
 return (
<div>
 <h1>{props.name}</h1>

 </div>)
}


// class Clock extends React.Component {
//     render() {
//       return (
//         <div>
//           <h1>Hello, world!</h1>
//           <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
//         </div>
//       );
//     }
//   }
class Clock extends React.Component{
  
        //    state={date:new Date()}
        constructor(props){
            super(props);
            this.state={date:new Date(),count:0};
            console.log(this)
            // this.increment = this.increment.bind(this)
        }
        componentDidMount(){
            this.timerID=setInterval(()=>this.tick(),1000)
        }
        tick(){
            this.setState({date:new Date()})
        }
       increment=()=>{
            console.log(this)
            this.setState({count:this.state.count+1})
        }
        // componentDidMount(){
        //     setInterval(()=> {this.renders()},1000)
        // }
        // renders =()=>{
        //     this.setState({date: new Date()})
        // }
        render(){
            return(
          <div>
          <h1>Hello,world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          <button onClick={this.increment}>Increment</button>
          <h2>{this.state.count}</h2>
          
          </div>
            )
    }
}
function FormattedDate(props){
    return <h2>it is {props.date.toLocaleTimeString()}</h2>
}

   
function App() {
    return (
      <div>
        <Clock />
        <Clock />
        <Clock />
      </div>
    );
  }
    // ReactDOM.render(<Clock/>,document.getElementById('root'))


ReactDOM.render(<App/>,document.getElementById('root')) 
 
 