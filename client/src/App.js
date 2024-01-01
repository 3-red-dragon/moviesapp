import './App.css'
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './User/Login';
import { Routes, Route } from "react-router-dom"
import Home from './User/Home';
import Hallnames from './User/Theatrenames';
import MovieDetails from './User/Moviedetails'
import AdminHp from './Admin/AdminHp';
import Theatre from './User/Theatre';
import Addmovie from './Admin/Addmovie';
import Trailer from './User/Trailer';
import Updatemovie from './Admin/Updatemovie';
import Addtheatre from './Admin/Addtheatre';
import Updatetheatre from './Admin/Updatetheatre';
import Amovies from './Admin/Amovies';
import Atheatres from './Admin/Atheatres';
import Confirmationpage from './User/Confirmationpage';
import Ticketpage from './User/Ticketpage';
import Searchbox from './User/Searchbox';
import Adminlogin from './Admin/Adminlogin';
import Alertform from './Admin/Alertform';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route path="/home" element={<Home />} />
        <Route path='/adminhp' element={<AdminHp />} />
        <Route path='/movies/:id/update' element={<Updatemovie />} />
        <Route path="/alertform" element={<Alertform/>}/>
        <Route path='/addmovies' element={<Addmovie />} />
        <Route path='/addtheatres' element={<Addtheatre />} />
        <Route path='/searchbox' element={<Searchbox />} />
        <Route path='/allmovies' element={<Amovies />} />
        <Route path='/alltheatres' element={<Atheatres />} />
        <Route path='/theatres/:id/update' element={<Updatetheatre />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path='/movies/:id/trailer' element={<Trailer />} />
        <Route path='/theatres' element={<Hallnames />} />
        <Route path="/seating" element={<Theatre />} />
        <Route path='/confirmation/:selected/:totalPrice' element={<Confirmationpage />} />
        <Route path='/ticketpage/:selected/:total' element={<Ticketpage />} />
      </Routes>
    </div>
  );
}

export default App;
