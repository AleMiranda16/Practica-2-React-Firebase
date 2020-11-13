import logo from '../logo.svg';
import '../App.css';

const Header = () => {
    return (  
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Practica #2 React + Firebase
        </p>
      </header>
    );
}
 
export default Header;