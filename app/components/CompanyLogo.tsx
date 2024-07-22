import React from "react";

const CompanyLogo = ({ name }: { name: string }) => {
  const initials = name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");

  return (
    <div className="w-full h-full flex items-center justify-center bg-zinc-500 rounded-full">
      <h3 className="text-2xl text-gray-200 font-extrabold text-center p-2 bg-zinc-700 rounded-full">
        {initials}
      </h3>
    </div>
  );
};

export default CompanyLogo;
