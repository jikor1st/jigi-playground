import { NextPage } from "next";
import React, { useEffect, useState } from "react";

export async function getStaticProps() {
  console.log("server");
  return {
    props: { time: new Date().toISOString() },
    revalidate: 1,
  };
}

interface ISRProps {
  time: string;
}

const ISR: NextPage<ISRProps> = ({ time }) => {
  return (
    <div>
      <main>
        <h1>{time}</h1>
      </main>
    </div>
  );
};

export default ISR;
