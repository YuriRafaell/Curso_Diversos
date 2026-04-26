// Componente pai
import "./App.css";

// Importar o componente o componente filho 
import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponent from "./components/ClassComponent";
import PropsExample from "./components/PropsExample";
import PropsExampleOne from "./components/PropsExampleOne";

function App() {
  return (
    <>
    <h1>Hello World React</h1>

    {/* utilizando  o compinente importado no JSX */}
    <FunctionalComponent />
    <ClassComponent />
    <PropsExampleOne nome="Yuri" idade={23} />
    <PropsExample comida="pizza" time="flamengo" />
    </>
  );
}

export default App;