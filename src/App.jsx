import "./App.css";
import { Catergory, Food_del, Header, Top_res } from "./components";
import Filter from "./components/food_delivery/filter/Filter";

function App() {
  return (
    <>
      <Header/>
      <Catergory/>
      <Top_res/>
      <Food_del/>
      {/* <Filter/> */}
    </>
  );
}

export default App;
