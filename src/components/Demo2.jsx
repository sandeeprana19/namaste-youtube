import { current } from "@reduxjs/toolkit";
import React, { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 0;
  const ref = useRef(0);

  console.log("Rendering...");

  const i = useRef(null);
  // let i = {
  //   current: null,
  // };
  useEffect(() => {
    if (i.current) return;
    i.current = setInterval(() => {
      console.log("Namaste React", Math.random());
    }, 1000);
  });

  return (
    <div className="m-2 p-2 border border-black w-96 h-96">
      <div>
        <button
          className="bg-green-100 p-2 m-2"
          onClick={() => {
            x = x + 1;
            console.log("x=" + x);
          }}
        >
          Increase x
        </button>
        <span>let = {x}</span>
      </div>
      <div>
        <button
          className="bg-green-100 p-2 m-2"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase y
        </button>
        <span>State = {y}</span>
      </div>
      <div>
        <button
          className="bg-green-100 p-2 m-2"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("Ref=" + ref.current);
          }}
        >
          Increase z
        </button>
        <span>Ref = {ref.current}</span>
      </div>
      <button
        className="bg-red-900 p-4 m-4 text-white rounded-lg"
        onClick={() => clearInterval(i.current)}
      >
        Stop Printing
      </button>
    </div>
  );
};

export default Demo2;
