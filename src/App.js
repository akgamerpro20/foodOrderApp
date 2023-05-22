import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showHideCartHandler = () => {
    setCartIsShown(!cartIsShown);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onHideCart={showHideCartHandler} />}
      <Header onShowCart={showHideCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
