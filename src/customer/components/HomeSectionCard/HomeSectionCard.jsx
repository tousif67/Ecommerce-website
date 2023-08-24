import React from "react";

const HomeSectionCard = ({ product }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hiddn w-[14rem]  my-3 mx-3 ">
      <div className="h-[13rem] w-[10 rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product.imageUrl}
        />
      </div>
      <div className="p-4">
        <h3 className="tex-lg font-medium text-black-900">{product.brand}</h3>
        <p className="mt-2 text-sm text-black-400">
          {product.title}
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
