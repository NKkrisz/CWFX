import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [everythingHidden, setEverythingHidden] = useState(false)

  return (
    <>
      <button style={everythingHidden ? {width:"100vw", height:"100vh"} : {display:"block"}} onClick={()=> setEverythingHidden(!everythingHidden)}>{everythingHidden ? "Show Everything" : "Hide Everything"}</button>
      <div style={everythingHidden ? {display:"none"} : {display:"block"}}>
        <h1>CWFX</h1>
        <div id='controls'>
          <label htmlFor="backgroundColor">Background Color</label>
          <input name='backgroundColor' type="color" />
          <label htmlFor="shapeSelector">Shape</label>
          <select name="shapeSelector">
            <option value="empty">-</option>
            <option value="line">Line</option>
            <option value="square">Square</option>
            <option value="circle">Circle</option>
            <option value="triangle">Triangle</option>
          </select>
          <label htmlFor="shapeColor">Shape Color</label>
          <input name='shapeColor' type="color"/>
          <label htmlFor="shapeAmount">Amount Of Shapes</label>
          <input type="range" min={1} max={100} name="shapeAmount"/>
          <div className='value'>
            <p>Min</p>
            <p>Value</p>
            <p>Max</p>
          </div>
          <label htmlFor="shapeGap">Gap Between Shapes</label>
          <input type="range" min={1} max={100} name="shapeGap"/>
          <div className='value'>
            <p>Min</p>
            <p>Value</p>
            <p>Max</p>
          </div>
          <label htmlFor="positionHorizontal">Horizontal Position</label>
          <input type="range" min={1} max={100} name="positionHorizontal"/>
          <div className='value'>
            <p>Min</p>
            <p>Value</p>
            <p>Max</p>
          </div>
          <label htmlFor="positionVertical">Vertical Position</label>
          <input type="range" min={1} max={100} name="positionVertical"/>
          <div className='value'>
            <p>Min</p>
            <p>Value</p>
            <p>Max</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
