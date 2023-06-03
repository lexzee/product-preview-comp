import './App.css';
import img from './images/image-product-mobile.jpg';

function App() {
  return (
    <div className="App">
      <div className="cardImg">
        <img src={img} alt="product" />
      </div>
      <div className="cardInfo">
        <div className="cardInfo__title">
          <span className="prodType">PERFUME</span>
          <h1>Gabrielle Essence Eau De Parfum</h1>
        </div>
        <div className="cardInfo__description">
          <p>
          A floral, solar and voluptuous interpretation composed by Olivier Polge,
    Perfumer-Creator for the House of CHANEL.
          </p>
        </div>
        <div className="cardInfo__price">
          <h2>$149.99 <span className="prev-price">$169.99</span> </h2>
        </div>
        <div className="cardInfo__buttons">
          <button className="cardInfo__buttons--add">Add to Cart</button>
        </div>
      </div>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
        Coded by <a href="https://github.com/lexzee">Your Name Here</a>.
      </div>
    </div>
  );
}

export default App;
