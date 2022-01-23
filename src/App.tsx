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
      height: "5000px",
      width: "5000px",
      position: "relative",
      overflow: "hidden",
      backgroundColor: "blue",
      display: "block",
  }

  const input: CSSProperties = {
    position: "absolute", 
    top:"600px",
    left:"100px",
    width:"200px",
    height:"30px" 
  }

  const getStyle = (color: string): CSSProperties => {
    return {
      height: "100px",
      width: "100%",
      backgroundColor: color,
      display: "block",
    }
  }

  const parrentClicked = (event: any) => {
    if(event.target.id === "input") return;
    document.getElementById("input")?.blur();
  }

  return <TransformWrapper panning={{excluded: ["exclude"]}} minScale={1} maxScale={1} zoomAnimation={{disabled: true}} >
        <TransformComponent wrapperStyle={wrapper} contentStyle={content}>
            <div style={parrent} onClick={(event: any) => parrentClicked(event)}>
              <div style={getStyle("red")}></div>
              <div style={getStyle("yellow")}></div>
              <div style={getStyle("green")}></div>
              <input id="input" type="text" className="exclude" style={input}/>
            </div>
        </TransformComponent>
    </TransformWrapper>

}

export default App;
