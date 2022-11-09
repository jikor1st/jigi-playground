import { Suspense, lazy } from "react";

import { Routes, Route } from "react-router-dom";
import ResetStyle from "./styles/resetStyle";

const CounterPage = lazy(() => import("./pages/counter/index.page"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetStyle />
      <Routes>
        <Route path="/counter" element={<CounterPage />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Suspense>
  );
}

export default App;
