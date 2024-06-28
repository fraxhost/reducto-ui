import React from "react";

const InputSection = () => {
  return (
    <div className="w-1/2">
      <p className="font-bold">Input</p>

      <div className="flex flex-col">
        <div className="flex flex-col mt-5 mr-5">
          <label htmlFor="scenario">Scenario</label>
          <textarea
            name="scenario"
            id="scenario"
            rows={5}
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-green-400"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default InputSection;
