import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header/Header";
import NotFoundPage from "./components/NotFoundpage/NotFoundPage";

const Home = lazy(() => import("./pages/Home/Home"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog"));

function App() {
  return (
    <>
      {" "}
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:catalogId" element={<div>soon</div>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
