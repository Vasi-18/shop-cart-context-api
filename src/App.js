import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import { DataProvider } from "./Context/DataContext";

const App = () => {
  return (
    <DataProvider>
    <BrowserRouter>
      <Routes>
      <Route path="/" Component={Home} />
        <Route path="/cart" Component={Cart} />   
      </Routes>
    </BrowserRouter>
    </DataProvider>
  );
};

export default App;
