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
    position: "fixed", 
    bottom:"0",
    width:"100%",
    height:"30px" 
  }

  return <div>
    <TransformWrapper minScale={1} maxScale={1} zoomAnimation={{disabled: true}} >
        <TransformComponent wrapperStyle={wrapper} contentStyle={content}>
            <div style={parrent}>
              <div style={redBox}></div>
              <div style={yellowBox}></div>
            </div>
        </TransformComponent>
    </TransformWrapper>
    <input type="text" style={input}/>
  </div>

}

export default App;
