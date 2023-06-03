import './App.css';
import imgMobile from './images/image-product-mobile.jpg';
import imgDesktop from './images/image-product-desktop.jpg';
import cart from './images/icon-cart.svg';
import { useEffect, useState } from 'react'

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleView = () => {
      setIsMobile(window.innerWidth < 780);
    };
    handleView();
    window.addEventListener('resize', handleView);

    return () => {
      window.removeEventListener('resize', handleView);
    }
  }, [])

  return (
    <>
    <div className="App">
      <img src={isMobile ? imgMobile : imgDesktop} alt="product" className="cardImg" />
      <div className="cardInfo">
        <div className="cardInfo__title">
          <span className="prodType">PERFUME</span>
          <h1>Gabrielle Essence Eau De Parfum</h1>
        </div>
        <div className="cardInfo__description">
          <p>
          A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
          </p>
        </div>
        <div className="cardInfo__price">
          <h2>$149.99</h2>
          <p className="prev-price">$169.99</p>
        </div>
        <button className="cardInfo__button">
          <img src={cart} alt="btn-icon" className="btn-icon" />
          <p>Add to Cart</p>
        </button>
      </div>
    </div>
    <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
      Coded by <a href="https://github.com/lexzee" target="_blank" rel="noreferrer">Lexzee</a>.
    </div>
    </>
  );
}

export default App;
