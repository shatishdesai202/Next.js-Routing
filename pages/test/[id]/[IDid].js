import React from "react";
import { useRouter } from "next/router";

const IDid = () => {
  const router = useRouter();
  return (
    <div>
      <h1> this is dynamic inside dynamic routing</h1>
      <h3> {JSON.stringify(router.query)} </h3>
      <h3> {router.pathname} </h3>
    </div>
  );
};

export default IDid;
