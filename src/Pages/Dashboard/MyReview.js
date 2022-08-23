import React from "react";
import { useForm } from "react-hook-form";

const MyReview = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const url = `http://localhost:5000/reviews`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className="w-3/6 mx-auto m-10">
      <h2 className="m-3 text-2xl">Please add a Review</h2>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <textarea
          className="input input-bordered w-full max-w-xs mb-5"
          placeholder="Please enter Review"
          {...register("Review")}
        />
        <input
          type="submit"
          className="btn btn-primary  max-w-xs p-3"
          value="Add Review"
        />
      </form>
    </div>
  );
};

export default MyReview;
