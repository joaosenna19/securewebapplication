'use client';
import Login from "@/components/login";
import { useState } from "react";
import ChuckNorris from "@/components/chuckNorris";
export default function Home() {
  const [token, setToken] = useState("");

  const handleToken = (token) => {
    setToken(token);
  };

  if (token === "") {
    return (
      <>
        <div className="flex flex-col items-center justify-center">
          <Login setToken={handleToken} />
        </div>
      </>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <ChuckNorris setToken={handleToken} token={token} />
    </div>
  );
}
