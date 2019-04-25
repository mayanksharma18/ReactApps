import React from 'react';
import ReactDOM from 'react-dom'

class Toggle extends React.Component{
  constructor(props){
      super(props);
          this.state={istoggle:true};
          this.handleclick=this.handleclick.bind(this);
      }


      //method
      handleclick(){
          console.log(this)
          this.setState(state=>({istoggle:!state.istoggle}));
      }

      render(){
          return(
              <div>
              <button onClick={this.handleclick}>Toogle</button>
              <h1>{this.state.istoggle?"On":"OF"}</h1>
              </div>
          )
      }

  }



  ReactDOM.render(<Toggle/>,document.getElementById("root"))
  



