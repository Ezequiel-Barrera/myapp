{/*import ItemListContainer from './pages/ItemListContainer/ItemListContainer'*/}
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer'
import NavBar from './components/NavBar/NavBar'


function App() {

  return (
    <div className="App">
      <NavBar />
        {/*<ItemListContainer />*/}      
        <ItemDetailContainer />
    </div>
  )
}

export default App
