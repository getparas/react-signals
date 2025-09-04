import { useState } from "react";

function Greeting({ name }: { name: string }) {
	console.log("Greeting Rendered", Date.now());
	return (
		<p>Hello, {name ? <strong>{name}!</strong> : <em>name not set...</em>}</p>
	);
}

function UseStateExample() {
	console.log("App Rendered", Date.now());
	const [inputValue, setInputValue] = useState("");
	const [name, setName] = useState("");

	return (
		<div>
			<h1>With useState</h1>
			<label>
				Enter your name:
				<input
					type="text"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<button
					type="submit"
					onClick={() => {
						setName(inputValue);
					}}
				>
					Set Name
				</button>
			</label>
			<Greeting name={name} />
		</div>
	);
}

export default UseStateExample;
