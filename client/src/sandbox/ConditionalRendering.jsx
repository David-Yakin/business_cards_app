import React from "react";

const ConditionalRendering = () => {
  const array = [1, 2, 3];
  // const array = []

  if (!array.length) return <p>No data to show...</p>;

  return (
    <div>
      {array.map((number, index) => (
        <p key={index}>{number}</p>
      ))}
    </div>
  );
};

export default ConditionalRendering;
