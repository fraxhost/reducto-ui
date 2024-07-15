import React, { ChangeEvent, useState } from "react";

interface InputSectionProps {
  scenario: string;
  setScenario: React.Dispatch<React.SetStateAction<string>>;
}

const InputSection: React.FC<InputSectionProps> = ({
  scenario,
  setScenario,
}) => {
  const handleScenarioChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setScenario(event.target.value);
  };

  return (
    <div className="w-1/2">
      <p className="font-bold">Input</p>

      <div className="flex flex-col">
        <div className="flex flex-col mt-5 mr-5">
          <label htmlFor="scenario">Scenario</label>
          <textarea
            name="scenario"
            id="scenario"
            rows={11}
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-green-400"
            value={scenario}
            onChange={handleScenarioChange}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default InputSection;
