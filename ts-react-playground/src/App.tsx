import { Suspense, lazy } from "react";

import { Routes, Route } from "react-router-dom";
const CounterPage = lazy(() => import("./pages/counter/index.page"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/counter" element={<CounterPage />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Suspense>
  );
}

export default App;
