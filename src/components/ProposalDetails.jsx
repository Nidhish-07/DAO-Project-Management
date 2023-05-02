import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ProposalDetails = () => {
  return (
    <div className="p-8 ">
      <h2 className="font-semibold text-3xl  mb-5">Hello</h2>
      <p>
        The proposal is to payout <strong>{3} ETH</strong> and currently have{" "}
        <strong>{123} votes</strong> and will expire in{" "}
        <strong>{3} days</strong>
      </p>
      <hr className="my-6 border-gray-300 dark:border-gray-500" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aliquam
        tempora, necessitatibus pariatur corporis ipsum voluptatibus. Rem totam
        dolore at sed aliquam. Laboriosam, blanditiis magni!
      </p>
      <div className="flex justify-start items-center w-full mt-4 overflow-auto">
        <BarChart width={750} height={250} data={null}>
          <CartesianGrid strokeDasharray={"3 3"}>
            <XAxis dataKey={"name"}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Legend></Legend>
            <Bar dataKey={"Acceptees"} fill="#2563eb"></Bar>
            <Bar dataKey={"Rejectees"} fill="#dc2626"></Bar>
          </CartesianGrid>
        </BarChart>
      </div>
      <div
        role="group"
        className="flex justify-start items-center space-x-3 mt-4"
      >
        <button
          type="button"
          className="px-4 py-2.5 bg-transparent font-medium text-sm leading-tight uppercase text-blue-600 shadow-md shadow-gray-400   active:bg-blue-800   dark:shadow-transparent  transition duration-150 ease-in-out  dark:border dark:border-blue-500 hover:text-white border-blue-600 hover:bg-blue-600  rounded-full"
        >
          Accept
        </button>
        <button
          type="button"
          className="px-4 py-2.5 bg-transparent font-medium text-sm leading-tight uppercase text-red-600 shadow-md shadow-gray-400   active:bg-red-800   dark:shadow-transparent  transition duration-150 ease-in-out  dark:border dark:border-red-500 hover:text-white border-red-600 hover:bg-red-600  rounded-full"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default ProposalDetails;
