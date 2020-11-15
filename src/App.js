import ColorPicker from "./components/colorPicker";
import SizeSetting from "./components/sizeSetting";
import Result from "./components/result";
import Resert from "./components/resert";
import { useState } from "react";


function App() {
  const [color, setColor] = useState('red');
  const [fontSize, setFontSize] = useState(14);
  const [keyForm, setKeyForm] = useState([]);
  function changeColorFunction(paramColor){
    setColor(paramColor);
  };

  function changeSizeFunction(paramFontSize){
    setFontSize(paramFontSize);
  };

  function resert(){
    setColor('red');
    setFontSize(14);
  }

  function sendDataForm(event){
    event.preventDefault();
    console.log(keyForm);
  }

  function handleChaneData(event){
    var value = event.target.name === "check" ? event.target.checked : event.target.value;
    var name = event.target.name;
    setKeyForm({
        ...keyForm,
        [name]: value
      })
  }

  return (
    <>
      <form className="form-inline">
        <label htmlFor="email">Email address:</label>
        <input type="email" className="form-control" name="email" placeholder="Enter email" id="email" onChange={handleChaneData} />
        <label htmlFor="pwd">Password:</label>
        <input type="password" className="form-control" name="password" placeholder="Enter password" id="pwd" onChange={handleChaneData}/>
        <textarea name="textarea" onChange={handleChaneData}></textarea>
        <div className="form-check">
          <label className="form-check-label">
            <input className="form-check-input" name="check" type="checkbox" onChange={handleChaneData}/> Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={sendDataForm}>Submit</button>
      </form>
      <ColorPicker colorDefault={color} changeColor={changeColorFunction} />
      <SizeSetting fontSizeDefault={fontSize} color={color} changeSize={changeSizeFunction}/>
      <Result color={color} size={fontSize}/>
      <Resert resertFontSizeAndColor={resert}/>
    </>
  );
}

export default App;
