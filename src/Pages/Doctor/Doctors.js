import React from "react";
import quote from "../../assets/icons/quote.svg";
import { useQuery } from "react-query";
import Doctor from "./Doctor";
import Loading from "../Shared/Loading";
const Doctors = () => {
  const {
    data: doctorsData,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <section className="my-20">
      <h2 className="text-primary  text-3xl font-bold uppercase text-center ">
        Ours Doctors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {doctorsData.map((doctor) => (
          <Doctor key={doctor._id} doctor={doctor} refetch={refetch}></Doctor>
        ))}
      </div>
    </section>
  );
};

export default Doctors;
