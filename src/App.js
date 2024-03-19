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

  // userChoice -> rock, scissors, paper
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  };

  return (
    <div>
      <div className='main'>
        <Box title='You' item={userSelect}/>
        <Box title='computer' />
      </div>
      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;