import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Services from './Components/Services';
import Experience from './Components/Experience';
import Portfolio from './Components/Portfolio';
import Contacts from './Components/Contacts';

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <AboutMe/>
      <Services/>
      <Experience/>
      <Portfolio/>
      <Contacts/>
    </>
  );
}

export default App;
