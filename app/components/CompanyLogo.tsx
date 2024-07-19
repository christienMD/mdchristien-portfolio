import React from "react";

const CompanyLogo = ({ name }: { name: string }) => {
  return (
    <h3 className="flex items-center text-3xl text-gray-200 font-extrabold text-center max-w-2xl">
      {name}
    </h3>
  );
};

export default CompanyLogo;
