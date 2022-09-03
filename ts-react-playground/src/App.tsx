import React, { Suspense } from "react";

// routers
import { Routes, Route } from "react-router-dom";

// meta-components

// containers

// constants
import { ROUTES } from "./lib/constants";

function App() {
  return (
    <>
      <Routes>
        {ROUTES.map(({ path, element }) => (
          <Route
            path={path}
            element={
              <Suspense fallback={<div>loading</div>}>
                {React.createElement(element)}
              </Suspense>
            }
            key={path}
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
