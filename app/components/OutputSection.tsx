import React from "react";

interface OutputSectionProps {
  result: string;
}

const OutputSection: React.FC<OutputSectionProps> = ({ result }) => {
  return (
    <div className="w-1/2 border-red-100">
      <p className="font-bold">Output</p>

      <div className="flex flex-col">
        <div className="mt-5">
          <p>Result</p>
          <div className="border-2 border-gray-300 rounded-md p-2 min-h-72">
            {result}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutputSection;
