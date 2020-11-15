import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="calculator-container">
          <div className="one">
            <p className="parOne">59 x 89 &divide; 34 + 789 - 69</p>
          </div>
          <div className="two">
            <p className="parTwo">874.441176</p>
          </div>
          <div className="box numC"><p>C</p></div>
          <div className="box numPosNeg"><p>+/-</p></div>
          <div className="box numPerc"><p>%</p></div>
          <div className="box numDivide"><p>&divide;</p></div>
          <div className="box num7"><p>9</p></div>
          <div className="box num8"><p>8</p></div>
          <div className="box num9"><p>9</p></div>
          <div className="box numMultiply"><p>&times;</p></div>
          <div className="box num4"><p>4</p></div>
          <div className="box num5"><p>5</p></div>
          <div className="box num6"><p>6</p></div>
          <div className="box numSubstract"><p>-</p></div>
          <div className="box num1"><p>1</p></div>
          <div className="box num2"><p>2</p></div>
          <div className="box num3"><p>3</p></div>
          <div className="box numAdd"><p>+</p></div>
          <div className="box num0"><p>0</p></div>
          <div className="box numDot"><p>.</p></div>
          <div className="box numDel"><p>del</p></div>
          <div className="box numEqual"><p>=</p></div>
        </div>
      </header>
    </div>
  );
}

export default App;
