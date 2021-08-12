import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const blogid = () => {
  const router = useRouter();
  return (
    <div>
      <h1>this is dynamic blog router</h1>
      <h1>{JSON.stringify(router.query)}</h1>
      <h1>{router.pathname}</h1>
      <div>
        <li>
          <Link href="/">Landing Page</Link>
        </li>
      </div>
    </div>
  );
};

export default blogid;
