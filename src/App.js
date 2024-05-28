import Main from './components/Main/Main'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FilteredProducts from "./components/FilteredProducts/FilteredProducts"
import SingleProduct from './components/FilteredProducts/SingleProduct'
import { useSelector } from 'react-redux'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/filteredProducts/:type" element={<FilteredProducts />} />
          <Route path="/filteredProducts/:type/:id" element={<SingleProduct />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
