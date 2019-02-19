import React, { Component } from 'react';

class Dice extends Component {
  constructor (props) {
    super(props);
    this.state = {dice: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Dice-0.svg/2000px-Dice-0.svg.png",
      "https://static.thenounproject.com/png/1341914-200.png",
      "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_2-512.png",
      "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_3-512.png",
      "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_4-512.png",
      "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_5-512.png",
      "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_6-512.png"
    ], currentVal: Math.floor(Math.random() * 6) + 1 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      currentVal: 0
    }))

    setTimeout(
      function() {
        this.setState({currentVal: Math.floor(Math.random() * 6) + 1})
      }
      .bind(this), 1000
    )
  }

  render() {

    return (
        <div className="box">
          <img onClick={this.handleClick} src={this.state.dice[this.state.currentVal]} width="200px" alt=""/>
        </div>
      )
  }
}

export default Dice