import React from "react";

const Doctor = ({ doctor, refetch }) => {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={doctor.img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{doctor.name}</h2>
        <p className="text-xl">{doctor.specialty}</p>
      </div>
    </div>
  );
};

export default Doctor;
