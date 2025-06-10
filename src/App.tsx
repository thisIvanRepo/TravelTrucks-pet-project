import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header/Header";
import NotFoundPage from "./components/NotFoundpage/NotFoundPage";
import Loading from "./pages/Loading/Loading";

const Home = lazy(() => import("./pages/Home/Home"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog"));
const TruckDetails = lazy(() => import("./pages/TruckDetails/TruckDetails"));

function App() {
  return (
    <>
      {" "}
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:catalogId" element={<TruckDetails />}>
            <Route path="futures" element={<div>futures</div>} />
            <Route path="revievs" element={<div>revievs</div>} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
