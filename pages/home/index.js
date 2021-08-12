import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div>
      <h1>This is a home page</h1>
      <li>
        <Link replace href="/">
          Main Page
        </Link>
      </li>
    </div>
  );
};

export default index;
