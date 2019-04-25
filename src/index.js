import React from 'react';
import ReactDOM from 'react-dom'
import { setInterval } from 'timers';


const name = "Mayank"

function users(user) {
    return user.firstname + "" + user.lastname

}
var data = {
    firstname: "Mayank",
    lastname: "Sharma"
}

function check(user) {
    if (user) {

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


function Welcome(props) {
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
class Clock extends React.Component {

    //    state={date:new Date()}
    constructor(props) {
        super(props);
        this.state = { date: new Date(), count: 0 };
        console.log(this)
        // this.increment = this.increment.bind(this)
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }
    tick() {
        this.setState({ date: new Date() })
    }
    increment = () => {
        console.log(this)
        this.setState({ count: this.state.count + 1 })
    }
    // componentDidMount(){
    //     setInterval(()=> {this.renders()},1000)
    // }
    // renders =()=>{
    //     this.setState({date: new Date()})
    // }
    render() {
        return (
            <div>
                <h1>Hello,world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <button onClick={this.increment}>Increment</button>
                <h2>{this.state.count}</h2>

            </div>
        )
    }
}
function FormattedDate(props) {
    return <h2>it is {props.date.toLocaleTimeString()}</h2>
}


function App() {
    return (
        <div>
            <Clock />
            <Clock />
            <Clock />
            <ActionLink />
        </div>
    );
}
// ReactDOM.render(<Clock/>,document.getElementById('root'))
////////////////////Event handlers

function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked')
    }
    return (
        <a href='#' onClick={handleClick}>Click Me</a>
    )
}
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { istoggle: true };
        this.handleclick = this.handleclick.bind(this);
    }


    //method
    handleclick() {
        console.log(this)
        this.setState(state => ({ istoggle: !state.istoggle }));
    }

    render() {
        return (
            <div>
                <button onClick={this.handleclick}>Toogle</button>
                <h1>{this.state.istoggle ? "On" : "OF"}</h1>
            </div>
        )
    }

        }
        // ReactDOM.render(<Toggle/>,document.getElementById('root')) 

        ////////Condtitional Renderting

function UserGreeting(props) {
    return <h1>Welcome back!</h1>
}
function GuestGreeting(props) {
    return <h1>Please LogIn</h1>
}

function Greeting(props) {
    const islogged = props.logged;
    if (islogged) {
        return <UserGreeting />
    }
    else {
        return <GuestGreeting />
    }
}






class LoginControl extends React.Component{

        constructor(props){
            super(props)
        this.handleClickLogin=this.handleClickLogin.bind(this);
        this.handleClickLogOut=this.handleClickLogOut.bind(this)
            this.state={isLoggedin:true};
        }
     handleClickLogin(){
       this.setState({isLoggedin:true});
     }
     handleClickLogOut(){
         this.setState({isLoggedin:false})
     }

        render(){
            let button
            let LoggedIn=this.state.isLoggedin
            if(LoggedIn){
                button=<button onClick={this.handleClickLogOut}>LogOut</button>
            }
            else{
                button=<button onClick={this.handleClickLogin}>LogIn</button>
            }
            return (
               <div>
                <h1><Greeting logged={this.state.isLoggedin}/></h1>
                {button}
                </div>
            )
        }

}


ReactDOM.render(<LoginControl />, document.getElementById('root')) 
