import Recipes from "./Recipes";

import "../styles/index.scss";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>React</h1>
        </section>
        <Recipes />
      </main>
    </>
  );
};
export default App;
