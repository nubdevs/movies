import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import MovieList from './Component/MovieList';
import Movie from './Pages/Movie';




function App() {
  return (
    <div className="App">
 <Router>
          <Navbar/>
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie/>}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
  </div>
  );
}

export default App;
