import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Dashboard, Home, PageNotFound, Result } from "./pages";

function App() {
  return (
    <main className="flex flex-col h-screen">
      <BrowserRouter>
        <Header />
        <section className="flex-1 mt-20 md:mt-0 px-5 md:px-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/result" element={<Result />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </section>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;

// import { useSelector, useDispatch } from "react-redux";
// import { getCities } from "./store/city/actions";
// import { selectCity } from "./store/city/citySlice";
// import { getVehicles } from "./store/vehicle/actions";

// const city = useSelector((state) => state.city);
// const dispatch = useDispatch();
// // console.log(city);

// useEffect(() => {
//   dispatch(getCities());
//   dispatch(getVehicles());
// });

// const handleAddCity = () => {
//   const newCity = { name: "New York", distance: 8000000 };
//   dispatch(selectCity(newCity));
// };
