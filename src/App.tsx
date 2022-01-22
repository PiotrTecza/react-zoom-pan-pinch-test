import { CSSProperties } from 'react';
import './App.css';
import {TransformWrapper, TransformComponent} from "react-zoom-pan-pinch";

function App() {
  const wrapper: CSSProperties = {
    height: "100%",
    width: "100%",
    position: "relative",
    overflow: "hidden"
  }

  const content: CSSProperties = {
    position: "relative",
  }

  const parrent: CSSProperties = {
      height: "2000px",
      width: "2000px",
      position: "relative",
      overflow: "hidden",
      backgroundColor: "blue",
      display: "block",
  }

  const redBox: CSSProperties = {
    height: "100px",
    width: "100%",
    backgroundColor: "red",
    display: "block",
  }

  const yellowBox: CSSProperties = {
    height: "100px",
    width: "100%",
    backgroundColor: "yellow",
    display: "block",
  }

  const input: CSSProperties = {
    position: "absolute", 
    top:"800px",
    left:"200px",
    width:"200px",
    height:"30px" 
  }

  return <div>
    <TransformWrapper panning={{excluded: ["exclude"]}} minScale={1} maxScale={1} zoomAnimation={{disabled: true}} >
        <TransformComponent wrapperStyle={wrapper} contentStyle={content}>
            <div style={parrent}>
              <div style={redBox}></div>
              <div style={yellowBox}></div>
              <input type="text" className="exclude" style={input}/>
            </div>
        </TransformComponent>
    </TransformWrapper>
  </div>

}

export default App;
