import React, { useEffect, useState } from "react";

export default function CSR() {
  const [time, setTIme] = useState<String>("");

  useEffect(() => {
    console.log("client");
    setTIme(new Date().toISOString());
  }, []);

  return (
    <div>
      <main>
        <h1>{time}</h1>
      </main>
    </div>
  );
}
