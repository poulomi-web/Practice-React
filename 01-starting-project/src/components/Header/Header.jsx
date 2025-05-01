import reactImage from "../../assets/react-core-concepts.png";

import "./Header.css";

const ReactDescription = ["Core", "New", "In-Depth"];

function RandomNum(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {ReactDescription[RandomNum(2)]} React concepts you will need for almost
        any app you are going to build!
      </p>
    </header>
  );
}
