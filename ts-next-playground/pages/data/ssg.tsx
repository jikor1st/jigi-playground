import { NextPage } from "next";
import React, { useEffect, useState } from "react";

export async function getStaticProps() {
  console.log("server");
  return {
    props: { time: new Date().toISOString() },
  };
}

interface SSGProps {
  time: string;
}

const SSG: NextPage<SSGProps> = ({ time }) => {
  return (
    <div>
      <main>
        <h1>{time}</h1>
      </main>
    </div>
  );
};

export default SSG;
