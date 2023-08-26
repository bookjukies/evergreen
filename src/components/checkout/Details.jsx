import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";


const Details = () => {
  const { register, handleSubmit, setValue } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Save the form data to localStorage
    sessionStorage.setItem("formData", JSON.stringify(data));

    // console.log(data);
    navigate("/checkout/shipping", { state: { data } });
  };

  useEffect(() => {
    const savedData = sessionStorage.getItem("formData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      Object.keys(parsedData).forEach((key) => {
        setValue(key, parsedData[key]);
      });
    }
  }, [setValue]);

  return (
    <div className="h-cover bg-white">
      <form
        className="w-screen md:w-full px-6 md:col-start-1 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="md:grid md:grid-cols-2 md:gap-4">
          <div className=" my-2 ">
            <label htmlFor="" className="block">
              First Name
            </label>
            <input
              type="text"
              name=""
              id="last"
              className="border  py-2 w-full md:border-gray-300 md:rounded md:border-2 md:py-2 px-2"
              {...register("first_name", { required: true })}
            />
          </div>

          <div className=" my-2 ">
            <label htmlFor="" className="block ">
              Last Name
            </label>
            <input
              type="text"
              name=""
              id="last"
              className="border w-full py-2 md:border-gray-300 md:rounded md:border-2 md:py-2 px-2"
              {...register("last_name", { required: true })}
            />
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-4">
          <div className="">
            <label className="block">Email</label>
            <input
              type="email"
              className="border w-full py-2 md:border-gray-300 md:rounded md:border-2 md:py-2 px-2"
              {...register("email", { required: true })}
            />
          </div>

          <div className="">
            <label htmlFor="" className="block ">
              Phone
            </label>
            <input
              type="tel"
              className="border w-full py-2 md:border-gray-300 md:rounded md:border-2 md:py-2 px-2"
              {...register("phone", { required: true, min: 10 })}
            />
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-4">
          <div className=" my-2">
            <label htmlFor="">Province</label>
            <select
              {...register("Province")}
              className="bg-white  w-full py-2 border md:border-gray-300 md:rounded md:border-2 md:py-2"
              {...register("province", { required: true })}
            >
              <option value="gauteng">Gauteng</option>
            </select>
          </div>

          <div className=" my-2 ">
            <label htmlFor="" className="block ">
              City
            </label>
            <input
              type="text"
              className="border w-full py-2 md:border-gray-300 md:rounded md:border-2 md:py-2 px-2"
              {...register("city", { required: true })}
            />
          </div>
        </div>

        <div className=" my-2 ">
          <label htmlFor="" className="block ">
            Apartment, suite, etc
          </label>
          <input
            type="text"
            className="border w-full py-2 md:border-gray-300 md:rounded md:border-2 md:py-2 px-2"
            {...register("adress_line_2", { required: false })}
          />
        </div>

        <div className=" my-2 ">
          <label htmlFor="" className="block ">
            Adress
          </label>
          <input
            type="text"
            className="border  w-full py-2 md:border-gray-300 md:rounded md:border-2 md:py-2 px-2"
            {...register("adress_line_1", { required: true })}
          />
        </div>

        <div className=" my-2 ">
          <label htmlFor="" className="block ">
            Postal code
          </label>
          <input
            type="number"
            className="border w-full py-2 md:border-gray-300 md:rounded md:border-2 md:py-2 px-2"
            {...register("postal_code", { required: true })}
          />
        </div>

        <div className="py-4 md:grid md:place-content-center">
          <button
            className="bg-black text-white w-full capitalize py-2 md:w-full md:px-32 "
            type="submit"
          >
            Checkout
          </button>
        </div>
      </form>

      <Outlet />
    </div>
  );
};

export default Details;
