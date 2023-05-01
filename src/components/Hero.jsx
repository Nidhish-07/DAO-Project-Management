import React from "react";

const Hero = () => {
  return (
    <div className="p-8 ">
      <h2 className="font-semibold text-3xl mb-5 ">4 Proprosals currently</h2>
      <p>
        Current balance
        <strong>{2} ETH</strong>
        <br />
        Your Contributions:
        <span>
          <strong>{4} ETH</strong>
          {2 === 2 && "YOu are now a stakeholder"}
        </span>
      </p>
      <hr className="my-6 border-gray-300 dark:border-gray-500" />
      <p>
        {false
          ? "You can now proporsals here"
          : "HEy, when you contribute 1 ETH you become a stakeholder"}
      </p>
      <div className="flex justify-start item-center md:w-1/3 w-full mt-4">
        <input
          type="number"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-700 dark:bg-transparent rounded transition ease-in-out m-0 shadow-md focus:text-gray-500 focus:outline-none dark:border-gray-500"
          placeholder="e.g.: 2.6 ETH"
          required
        />
      </div>
      <div className="flex justify-start item-center md:w-1/3 w-full mt-4 space-x-2">
        <button className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-sm leading-tight uppercase shadow-md rounded-full hover:bg-blue-700 shadow-gray-500 dark:shadow-transparent transition duration-150 ease-in-out  ">
          Contribute
        </button>{" "}
        <button className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-sm leading-tight uppercase shadow-md rounded-full hover:bg-blue-700 shadow-gray-500 dark:shadow-transparent transition duration-150 ease-in-out  ">
          Proposal
        </button>
      </div>
    </div>
  );
};

export default Hero;
