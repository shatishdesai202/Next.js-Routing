import React from "react";
import { useRouter } from "next/router";

const catchAll = () => {
  const router = useRouter();

  return (
    <div>
      <h1> this is catchAll route Example </h1>
      <h3>{router.pathname}</h3>
      <h3>{JSON.stringify(router.query)}</h3>
    </div>
  );
};

export default catchAll;
