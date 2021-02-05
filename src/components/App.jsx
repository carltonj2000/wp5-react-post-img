import Recipes from "./Recipes";
import Whatever from "./Whatever";

import "../styles/index.scss";

import pic from "../images/IMG_0782.jpeg";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>React</h1>
        </section>
        <Whatever />
        <Recipes />
        <img src={pic} alt="green sand" width="250px" />
      </main>
    </>
  );
};
export default App;
