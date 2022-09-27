import * as React from "react";
import { useRenderTimes } from './Utils';

function getRandomHEX() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function Header() {
  const [color, setColor] = React.useState("#122");
  const count = useRenderTimes();
  console.log('Header')
  return (
    <header style={{ backgroundColor: color }}>
      <p>Header component has re-rendered {count} times</p>
      <button onClick={() => setColor(getRandomHEX())}>Click</button>
    </header>
  );
}

function Footer() {
  const count = useRenderTimes();
  return (
    <footer>
      <p>Footer component has re-rendered {count} times</p>
    </footer>
  );
}

function Body() {
  const count = useRenderTimes();
  console.log('Body')
  return (
    <>
      <Header />
      <main style={{ backgroundColor: "#24123b", color: "#fff", minHeight: "80vh" }}>
        <p>The Body component has re-rendered {count} times</p>
      </main>
      <Footer />
    </>
  );
}


export default Body;
