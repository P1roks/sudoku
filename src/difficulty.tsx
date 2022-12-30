import {root} from "."
import {Board} from "./board";
import "./diff.css"

export const Difficulty = () => {
	const play = (diss: number) => root.render(<Board toDissapear={diss}/>);
	return (
	<div id="diff">
		<h1>Sudoku</h1>
		<h2>Wybierz poziom trudności</h2>
		<ol>
			<li><p onClick={() => play(3)}>Łatwy</p></li>
			<li><p onClick={() => play(5)}>Średni</p></li>
			<li><p onClick={() => play(9)}>Trudny</p></li>
		</ol>
	</div>
	)
}
