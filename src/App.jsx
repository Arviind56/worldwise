import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Home from "./pages/Homepage";
import PagenotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import CityList from "./Components/CityList";
import { useState } from "react";
import { useEffect } from "react";

const url = "http://localhost:8000";
function App() {
  const [cities, setcities] = useState([]);
  const [isloading, setisLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setisLoading(true);
        const res = await fetch(`${url}/cities`);
        const data = await res.json();
        setcities(data);
      } catch {
        alert("there is was an error ");
      } finally {
        setisLoading(false);
      }
    }
    fetchCities();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PagenotFound />}></Route>

        <Route path="AppLayout" element={<AppLayout />}>
          <Route
            index
            element={<CityList cities={cities} isloading={isloading} />}
          />
          <Route
            path="cities"
            element={<CityList cities={cities} isloading={isloading} />}
          />
          <Route
            path="countries"
            element={<countriesList cities={cities} isloading={isloading} />}
          />
          <Route path="form" element={<p>Form</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
