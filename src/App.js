import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/Pages/HomePage/homePage';
import Footer from './customer/components/Footer/footer';



function App() {
  return (
    <div className="App">
      <Navigation/>

      <div>
        <HomePage/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
