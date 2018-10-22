import React, { Component } from 'react';

import Navbar from './Navbar';
import './App.css';
import Jumbotron from './Jumbotron';
import Game from './Game';
import Friends from '../assets/pictures.json'
import Picture from './Picture'


class App extends Component {
    constructor(props) {
        super(props)
    
        this.shuffle = this.shuffle.bind(this)
      }

    state = {
        picked :[],
        score: 0,
        topScore: 0,
        friends: Friends
    }
    shuffle = (event) => {
        if (this.state.picked.indexOf(event) === -1){
            this.setState({picked: this.state.picked.concat(event)})
            this.setState({score: this.state.score + 1},function(){
          
            if (this.state.score > this.state.topScore){
                this.setState({topScore: this.state.score })
            }
        })
        }
        else{
            this.setState({score: 0})
            this.setState({picked: []})
        }
        

        var newFriends = this.state.friends
        for (let i = newFriends.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newFriends[i], newFriends[j]] = [newFriends[j], newFriends[i]];
        }
     
        this.setState({friends: newFriends});
        console.log(this.state.picked)
    }
    



  render(){
      return(
          <div>
              <Navbar topScore ={this.state.topScore} score = {this.state.score}/>
              <Jumbotron/>
              <Game data = {this.state} shuffle = {this.shuffle} />
          </div>
      )
  }
}

export default App;
