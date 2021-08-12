import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const homeId = () => {
  const router = useRouter();
  return (
    <div>
      <h1>this is home dynamic page</h1>
      <h3> {router.pathname} </h3>
      <h3>{JSON.stringify(router.query)} </h3>
      <li>
        <Link href="/home">Home Page</Link>
      </li>
    </div>
  );
};

export default homeId;
