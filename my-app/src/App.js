import "./App.css";
import Header from "./Header";
import ProductList from "./ProductList";
import LatestTrend from "./LatestTrend";
import Footer from "./Footer";
import { product } from "./mock/index";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductList  />
      <LatestTrend />
      <Footer />
    </div>
  );
}

export default App;