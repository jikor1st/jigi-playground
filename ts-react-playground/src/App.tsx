import { Suspense, lazy } from "react";

import { Routes, Route } from "react-router-dom";
import ResetStyle from "./styles/resetStyle";

const CounterPage = lazy(() => import("./pages/counter/index.page"));
const EffectivePage1 = lazy(() => import("./pages/effective/page1"));
const ContextApiPage = lazy(() => import("./pages/context-api/index.page"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetStyle />
      <Routes>
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/effective/1" element={<EffectivePage1 />} />
        <Route path="/context-api" element={<ContextApiPage />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Suspense>
  );
}

export default App;
