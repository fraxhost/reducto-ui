"use client";

import React, { useState } from "react";

import InputSection from "@/app/components/InputSection";
import OutputSection from "@/app/components/OutputSection";

export default function Home() {
  const [scenario, setScenario] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleSubmit = async () => {
    try {
      // Replace with your actual API endpoint and request logic
      console.log("scenario", scenario);

      const response = await fetch("api/gpt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: scenario }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      const data = await response.json();
      setResult(data.reply);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <main>
      <div className="flex flex-row m-5">
        <InputSection scenario={scenario} setScenario={setScenario} />
        <OutputSection result={result}></OutputSection>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button
          className="bg-green-400 w-24 rounded-md px-4 py-2 text-white"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </main>
  );
}
