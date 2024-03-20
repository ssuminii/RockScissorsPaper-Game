import { useState } from 'react';
import './App.css';
import Box from './component/Box';


// 1. 박스 두개 만들기 (타이틀, 사진, 결과)
// 2. 박스 하단에 가위바위보 버튼
// 3. 버튼을 클릭하면 클릭한 아이템이 박스에 보임
// 4. 버튼을 클릭하면 컴퓨터 아이템은 랜덤으로 선택됨
// 5. 3, 4번의 아이템들로 누가 이겼는지 승패를 나눔
// 6. 박스 테두리가 결과에 따라 색이 변함 (지면 빨간색, 이기면 초록색, 비기면 검정색)

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

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  // userChoice -> rock, scissors, paper
  const play = (userChoice) => {
    // 3. 버튼을 클릭하면 클릭한 아이템이 박스에 보임
    setUserSelect(choice[userChoice]);

    // 4. 버튼을 클릭하면 컴퓨터 아이템은 랜덤으로 선택됨
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    // 5. 3, 4번의 아이템들로 누가 이겼는지 승패를 나눔
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {
    console.log('user', user, 'computer', computer);

    // user == computer -> tie
    // user == rock, computer == scissors -----> user win
    // user == rock, computer == paper --------> user lose
    // user == scissors, computer == paper ----> user win
    // user == scissors, computer == rock -----> user lose
    // user == paper, computer == rock --------> user win
    // user == paper, computer == scissors ----> user lose
    if (user.name == computer.name) {
      return "Tie";
    } else if (user.name == "Rock") {
      return computer.name == "Scissors" ? "Win" : "Lose";
    } else if (user.name == "Scissors") {
      return computer.name == "Paper" ? "Win" : "Lose";
    }else if (user.name == "Paper") {
      return computer.name == "Rock" ? "Win" : "Lose";
    }
  }

  // 초이스를 배열로 만들어 그 배열 인덱스값으로 랜덤값 만들기
  const randomChoice = () => {
    // 객체에 키 값만 뽑아서 array로 만들어주는 함수
    let itemArray = Object.keys(choice);  // (3) ['rock', 'scissors', 'paper']
    // console.log('itemArray------------', itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    // console.log('random Value-----------', randomItem);
    let final = itemArray[randomItem];
    // console.log('final----------',final);
    return choice[final];
  };

  return (
    <div>
      {/* 1. 박스 두개 만들기 (타이틀, 사진, 결과) */}
      <div className='main'>
        <Box title='You' item={userSelect} result={result}/>
        <Box title='computer' item={computerSelect} result={result}/>
      </div>
      {/* 2. 박스 하단에 가위바위보 버튼 */}
      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;