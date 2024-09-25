import React from "react";
import { memo } from "react";

const Son = memo(({ numero, increment }) => {
  console.log("again reload...");
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => {
          increment(numero);
        }}
      >
        {numero}
      </button>
    </>
  );
});

export default Son;
