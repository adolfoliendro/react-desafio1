import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemCount } from "./components/ItemCount/ItemCount";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemDetailContainer itemId={2} />
      {/* <ItemListContainer /> */}
      <Footer />
    </div>
  );
}

export default App;
