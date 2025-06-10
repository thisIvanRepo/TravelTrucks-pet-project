import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header/Header";
import NotFoundPage from "./components/NotFoundpage/NotFoundPage";
import Loading from "./pages/Loading/Loading";

const Home = lazy(() => import("./pages/Home/Home"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog"));
const TruckDetails = lazy(() => import("./pages/TruckDetails/TruckDetails"));
const Futures = lazy(() => import("./components/Fuatures/Fuatures"));
const Revievs = lazy(() => import("./components/Revievs/Revievs"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:catalogId" element={<TruckDetails />}>
            <Route path="futures" element={<Futures />} />
            <Route path="revievs" element={<Revievs />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
