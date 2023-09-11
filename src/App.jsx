import "./App.css";

import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import data from "./data";
// console.log(data);
function App() {
  const cards = data.map((items) => {
    return <Card key={items.id} {...items} />;
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
