import React, { Component } from 'react';
import { Paper, Typography, TextField, Button } from '@material-ui/core'
import { List, ListItem, ListItemText } from '@material-ui/core'

export default class Todo extends Component {
    state = {
        exercises: [
          { id: 1, title: 'Bench Press' },
          { id: 2, title: 'Deadlift' },
          { id: 3, title: 'Squats' }
        ],
        title: ''
      }
     handleCreate=(e)=>{e.preventDefault() 
    
        if (this.state.title) {
            this.setState(({ exercises, title }) => ({
              exercises: [
                ...exercises,
                {
                  title,
                  id: Date.now()
                }
              ],
              title: ''
            }))
          }
        }
    
    
    handleChange = ({ target: { name, value } }) =>
        this.setState({
            [name]: value
        })

    render() {
        const { title, exercises } = this.state
        return (<Paper>
            <Typography variant='display2' align='center' gutterBottom >Exercises</Typography>
            <form onSubmit={this.handleCreate}>
               <TextField name="title" label='Excersises' value={title} onChange={this.handleChange} margin='normal'></TextField>
                <div><Button type='submit'color='primary'variant='raised' >Create </Button></div>
            </form>
            <List>
        {exercises.map(({ id, title }) =>
          <ListItem key={id}>
            <ListItemText primary={title} />
          </ListItem>
        )}
      </List>
        </Paper>
        )
    }




}