import "./App.css";
import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();
  return (
    <main>
      <h2>호이초이 리액트 모듈 테스트 🤡</h2>
      <button className='module-button' onClick={() => navigate("/modal")}>
        모달 테스트
      </button>
      <button className='module-button' onClick={() => navigate("/hook")}>
        훅 테스트
      </button>
    </main>
  );
}

export default App;
