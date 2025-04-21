import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [controlsHidden, setControlsHidden] = useState(false)

  useEffect(() => {
    if (!controlsHidden) return

    const showControls = () => {
      setControlsHidden(false)
    }

    document.addEventListener("click", showControls)

    return () => {
      document.removeEventListener("click", showControls)
    }
  }, [controlsHidden])

  const handleHideClick = (e) => {
    e.stopPropagation()
    setControlsHidden(true)
  }

  return (
    <>
      {!controlsHidden && (
        <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
          <h1>CWFX</h1>
          <button id="hideButton" onClick={handleHideClick}>Hide Everything</button>
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
            <input name='shapeColor' type="color" />
            <label htmlFor="shapeAmount">Amount Of Shapes</label>
            <input type="range" min={1} max={100} name="shapeAmount" />
            <div className='value'>
              <p>Min</p>
              <p>Value</p>
              <p>Max</p>
            </div>
            <label htmlFor="shapeGap">Gap Between Shapes</label>
            <input type="range" min={1} max={100} name="shapeGap" />
            <div className='value'>
              <p>Min</p>
              <p>Value</p>
              <p>Max</p>
            </div>
            <label htmlFor="positionHorizontal">Horizontal Position</label>
            <input type="range" min={1} max={100} name="positionHorizontal" />
            <div className='value'>
              <p>Min</p>
              <p>Value</p>
              <p>Max</p>
            </div>
            <label htmlFor="positionVertical">Vertical Position</label>
            <input type="range" min={1} max={100} name="positionVertical" />
            <div className='value'>
              <p>Min</p>
              <p>Value</p>
              <p>Max</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App
