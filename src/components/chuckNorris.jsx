'use client';
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ChuckNorris({ setToken , token}) {
  const [fact, setFact] = useState("");

  const getFact = async () => {
    try {
        console.log(token);
      const response = await fetch("http://localhost:3333/fact", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setFact(data.fact);
      } else {
        console.error("Failed to fetch fact");
      }
    } catch (error) {
      console.error("Failed to fetch fact", error);
    }
  };

  useEffect(() => {
    getFact();
  }, [token]);

  const handleLogout = () => {
    setToken("");
  }

  return (
    <Card className="w-full h-full max-w-md mt-10 ">
      <CardHeader>
        <CardTitle className="text-lg text-gray-500">Chuck Norris Facts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="font-semibold italic">"{fact}"</p>
      </CardContent>
      <CardFooter>
        <Button onClick={handleLogout}>Log out</Button>
      </CardFooter>
    </Card>
  );
}
