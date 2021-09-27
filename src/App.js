import "./App.css";
import Header from './Header'
import Footer from "./Footer";
import List from "./List";

function App() {
  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header />
        <List />
        <Footer />
      </div>
    </div>
  );
}

export default App;
