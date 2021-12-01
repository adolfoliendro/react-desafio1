import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
      <NavBar />
      
      <ItemListContainer greeting='Contenedor de la lista de articulos' />
      
      <ItemCount stock={5} />

      <Footer />
    </div>
  );
}

export default App;
