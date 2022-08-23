import React from "react";

const Doctor = ({ doctor }) => {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          voluptates quo incidunt harum minus mollitia!
        </p>
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={doctor.img} alt="" />
            </div>
          </div>
          <div>
            <h4 className="text-xl">{doctor.name}</h4>
            <p>{doctor.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
