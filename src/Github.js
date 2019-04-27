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
      
 
       componentDidMount(){
        console.log(this.props.props)
   let value="mayanksharma18"

     const url = `https://api.github.com/users/${value}`
  axios.get(url)
   .then((res)=>{
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