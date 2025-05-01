import { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [controlsHidden, setControlsHidden] = useState(false);
	const [backgroundColor, setBackgroundColor] = useState('#ffffff');
	const [shape, setShape] = useState('empty');
	const [shapeColor, setShapeColor] = useState('#000000');
	const [shapeAmount, setShapeAmount] = useState(1);
	const [shapeGap, setShapeGap] = useState(1);
	const [positionHorizontal, setPositionHorizontal] = useState(1);
	const [positionVertical, setPositionVertical] = useState(1);

	useEffect(() => {
		if (!controlsHidden) return;

		const showControls = () => {
			setControlsHidden(false);
		};

		document.addEventListener('click', showControls);

		return () => {
			document.removeEventListener('click', showControls);
		};
	}, [controlsHidden]);

	useEffect(() => {
		console.table({
			controlsHidden,
			backgroundColor,
			shape,
			shapeColor,
			shapeAmount,
			shapeGap,
			positionHorizontal,
			positionVertical,
		});
	}, [
		controlsHidden,
		backgroundColor,
		shape,
		shapeColor,
		shapeAmount,
		shapeGap,
		positionHorizontal,
		positionVertical,
	]);

	const handleHideClick = (e) => {
		e.stopPropagation();
		setControlsHidden(true);
	};

	return (
		<>
			{!controlsHidden && (
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
					}}
				>
					<h1>CWFX</h1>
					<button id="hideButton" onClick={handleHideClick}>
						Hide Everything
					</button>
					<div id="controls">
						<label htmlFor="backgroundColor">
							Background Color
						</label>
						<input
							name="backgroundColor"
							type="color"
							value={backgroundColor}
							onChange={(e) => setBackgroundColor(e.target.value)}
						/>

						<label htmlFor="shapeSelector">Shape</label>
						<select
							name="shapeSelector"
							value={shape}
							onChange={(e) => setShape(e.target.value)}
						>
							<option value="empty">-</option>
							<option value="line">Line</option>
							<option value="square">Square</option>
							<option value="circle">Circle</option>
							<option value="triangle">Triangle</option>
						</select>

						<label htmlFor="shapeColor">Shape Color</label>
						<input
							name="shapeColor"
							type="color"
							value={shapeColor}
							onChange={(e) => setShapeColor(e.target.value)}
						/>

						<label htmlFor="shapeAmount">Amount Of Shapes</label>
						<input
							type="range"
							min={0}
							max={100}
							name="shapeAmount"
							value={shapeAmount}
							onChange={(e) =>
								setShapeAmount(Number(e.target.value))
							}
						/>
						<div className="value">
							<p>Min</p>
							<p>{shapeAmount}</p>
							<p>Max</p>
						</div>

						<label htmlFor="shapeGap">Gap Between Shapes</label>
						<input
							type="range"
							min={0}
							max={100}
							name="shapeGap"
							value={shapeGap}
							onChange={(e) =>
								setShapeGap(Number(e.target.value))
							}
						/>
						<div className="value">
							<p>Min</p>
							<p>{shapeGap}</p>
							<p>Max</p>
						</div>

						<label htmlFor="positionHorizontal">
							Horizontal Position
						</label>
						<input
							type="range"
							min={0}
							max={100}
							name="positionHorizontal"
							value={positionHorizontal}
							onChange={(e) =>
								setPositionHorizontal(Number(e.target.value))
							}
						/>
						<div className="value">
							<p>Min</p>
							<p>{positionHorizontal}</p>
							<p>Max</p>
						</div>

						<label htmlFor="positionVertical">
							Vertical Position
						</label>
						<input
							type="range"
							min={0}
							max={100}
							name="positionVertical"
							value={positionVertical}
							onChange={(e) =>
								setPositionVertical(Number(e.target.value))
							}
						/>
						<div className="value">
							<p>Min</p>
							<p>{positionVertical}</p>
							<p>Max</p>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default App;
