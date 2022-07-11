import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Category from "./pages/category";
import Recipe from "./pages/Recipe";

import { ContextProvider } from "./context/context";

function App() {
  return (
    <div className="page">
      <Router>
        <Header />
        <ContextProvider>
          <main className="container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/meal/:id" element={<Recipe />}></Route>
              <Route path="/category/:name" element={<Category />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </main>
        </ContextProvider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
