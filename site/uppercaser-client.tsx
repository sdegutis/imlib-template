import { Css } from "./components/css.js";

document.getElementById('uppercaser-root')!.replaceChildren(<>
  <Css src="./uppercaser.css" />
  <fieldset>
    <legend>Uppercaser</legend>
    <Uppercaser />
  </fieldset>
</>);

function Uppercaser() {
  const input = <input autofocus /> as HTMLInputElement;
  const output = <input class='output' /> as HTMLInputElement;

  input.oninput = () => output.value = input.value.toUpperCase();
  return <>
    <p>{input}</p>
    <p>{output}</p>
  </>;
}
