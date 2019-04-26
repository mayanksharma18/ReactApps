import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardActionArea,CardMedia,CardContent  } from '@material-ui/core';
import { tsPropertySignature } from '@babel/types';
  

export default class GitProfile extends React.Component{
    state={
          login:"",
          avatar_url:"",
          bio:"",
     
      }
      
    
    
      
async componentDidMount(){
     this.props.getdata()
     let value = this.props.props

     const url = `https://api.github.com/users/${value}`
  const res = await axios.get(url)
  console.log(res)

   .then(()=>{
    this.setState({
        login:res.data.login,
        avatar_url:res.data.avatar_url,
        bio:res.data.bio,
    })
   })
        
     
 }

      render(){
          console.log(this.props)
          return(
          <Card>
            <CardMedia>
         
          <img src={this.state.avatar_url}/>
          </CardMedia>
          <CardContent>
          <h2>{this.state.login}</h2>
          <h3>{this.state.bio}</h3>
          </CardContent>
        </Card> 
          )
      }



}