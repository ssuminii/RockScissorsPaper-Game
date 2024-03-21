import React, { Component } from 'react';
import './App.css';
import BoxClass from "./component/BoxClass";

const choice = {
    rock: {
      name: 'Rock',
      img: "https://img.lovepik.com/free-png/20220125/lovepik-fist-png-image_401704646_wh860.png"
    },
    scissors: {
      name: 'Scissors',
      img: "https://i.pinimg.com/564x/37/4b/30/374b3031d3977aaec0fa634869dfeb64.jpg"
    },
    paper: {
      name: 'Paper',
      img: "https://i.pinimg.com/564x/fa/8d/4d/fa8d4dcc3eed46c789be966047ad8637.jpg"
    }
  };

export default class AppClass extends Component {
    // 생성자: 컴포넌트가 실행되자마자 호출되는 함수
    constructor() {
        super();
        this.state = {
            userSelect: null,
            computerSelect: null,
            result: "",
        };
    }

    play = (userChoice) => {
        let computerChoice = this.randomChoice();
        this.setState({
            userSelect: choice[userChoice],
            computerSelect: computerChoice,
            result: this.judgement(choice[userChoice], computerChoice),
        });
      };
      
      randomChoice = () => {
        let itemArray = Object.keys(choice);
        let randomItem = Math.floor(Math.random() * itemArray.length);
        let final = itemArray[randomItem];
        return choice[final];
      };

    judgement = (user, computer) => {
        if (user.name == computer.name) {
          return "Tie";
        } else if (user.name == "Rock") {
          return computer.name == "Scissors" ? "Win" : "Lose";
        } else if (user.name == "Scissors") {
          return computer.name == "Paper" ? "Win" : "Lose";
        }else if (user.name == "Paper") {
          return computer.name == "Rock" ? "Win" : "Lose";
        }
      };
    

  render() {
    return (
    <div>
        <div className='main'>
          <BoxClass 
          title='You' 
          item={this.state.userSelect} 
          result={this.state.result}/>
          <BoxClass 
          title='Computer' 
          item={this.state.computerSelect} 
          result={this.state.result}/>
        </div>
        <div>
          <p>가위 바위 보 중 하나를 선택해주세요</p>
        </div>
        <div className='main game-button'>
          <button onClick={() => this.play("scissors")}>✌🏻</button>
          <button onClick={() => this.play("rock")}>✊🏻</button>
          <button onClick={() => this.play("paper")}>✋🏻</button>
        </div>
    </div>
    );
  }
}
