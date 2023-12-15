import logo from './logo.svg';
import './pages/index.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <div className="App root">
      <Header />
      <Main />

      <main class="card">
      <template id="cardTemplate">
        <div class="card__item">
        <img class="card__image" />
        <button class="card__icon-delete hover-icon"></button>
        <div class="card__main-text">
          <h3 class="card__title"></h3>
          <div class="card__likes">
          <button class="card__icon hover-icon"></button>
          <p class="card__likes-text"></p>
          </div>
        </div>
        </div>
      </template>
      </main>

      <div class="pop-up">
      <img class="pop-up__image" />
      <button class="pop-up__icon hover-icon"></button>
      <h3 class="pop-up__title"></h3>
      </div>

      <div class="form form-confirm-container">
      <button type="button" class="form__icon form-confirm-container__icon hover-icon"></button>
      <div class="form-confirm-container__content">
        <h3 class="form-confirm-container__title">Apakah Anda Yakin ?</h3>
        <form action="POST" class="form-confirm">
        <button type="submit" class="form__button form-confirm-container__button hover-icon" aria-label="Ya">Ya</button>
        </form>
      </div>
      </div>

      
      <Footer />
    </div>
  );
}

export default App;


