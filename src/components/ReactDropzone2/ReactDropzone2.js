import React, { useCallback, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";

const ReactDropzone2 = () => {
  const [image, setImage] = useState("");
  const [uploadError, setUploadError] = useState("");

  // monitor state
  useEffect(() => {
    console.log(image);
  }, [image]);

  // handle image upload
  const onDrop = useCallback((acceptedFiles, rejectFiles) => {
    // clear state
    setImage("");
    setUploadError("");
    // Do something with the files
    console.log("acceptedlist", acceptedFiles);
    console.log("rejectdList", rejectFiles);

    // if have validate file
    if (acceptedFiles.length > 0) {
      const reader = new FileReader();

      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(acceptedFiles[0]);
    }

    // if have rejected file
    if (rejectFiles.length > 0) {
      // console.log('have error')
      let errorMessage = rejectFiles[0].errors[0].message;
      console.log(errorMessage);
      setUploadError(errorMessage);
    }
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [".jpeg"],
      "image/png": [".png"],
    },
    maxFiles: 1,
    onDrop,
  });

  //handle form submission
  const onSubmit = (data) => {
    data.image = image;
    console.log(data);
  };
  const { register, handleSubmit } = useForm();

  return (
    <div className="p-10">
      <div className="m-auto block p-6 rounded-lg shadow-lg bg-white max-w-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="upload form-group mb-6 ">
            <div
              {...getRootProps()}
              role="button"
              tabIndex="0"
              className="border-dashed border-2 border-border-base h-36 rounded flex flex-col justify-center items-center cursor-pointer focus:border-accent-400 focus:outline-none"
            >
              <input
                type="file"
                autoComplete="off"
                tabIndex="-1"
                name="profile.avatar"
                style={{ display: "none" }}
                {...getInputProps()}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="41px"
                height="30px"
                viewBox="0 0 40.909 30"
                className="text-muted-light"
              >
                <g transform="translate(0 -73.091)">
                  <path
                    data-name="Path 2125"
                    d="M39.129,89.827A8.064,8.064,0,0,0,34.58,86.94,5.446,5.446,0,0,0,30,78.546a5.207,5.207,0,0,0-3.537,1.321,10.921,10.921,0,0,0-10.1-6.776,10.511,10.511,0,0,0-7.713,3.2A10.508,10.508,0,0,0,5.454,84q0,.277.043.916A9.528,9.528,0,0,0,0,93.546a9.193,9.193,0,0,0,2.8,6.743,9.191,9.191,0,0,0,6.744,2.8H32.728a8.172,8.172,0,0,0,6.4-13.264Zm-12.06-.575a.656.656,0,0,1-.479.2H21.818v7.5a.691.691,0,0,1-.681.681H17.045a.691.691,0,0,1-.682-.681v-7.5H11.59a.655.655,0,0,1-.681-.681.8.8,0,0,1,.213-.512L18.6,80.783a.722.722,0,0,1,.98,0l7.5,7.5a.663.663,0,0,1,.191.49A.656.656,0,0,1,27.07,89.252Z"
                    transform="translate(0)"
                    fill="#e6e6e6"
                  ></path>
                </g>
              </svg>

              <p className="mt-4 text-center text-sm text-body">
                <span className="font-semibold text-accent">
                  Upload an image
                </span>{" "}
                or drag and drop <br />
                <span className="text-xs text-body">PNG, JPG</span>
              </p>
            </div>
            <aside className="mt-2 flex flex-wrap">
              <p className="text-red-600">{uploadError}</p>
              {image ? <img src={image} className=" w-[150px]" alt="" /> : null}
            </aside>
          </section>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-6">
              <input
                {...register("fName", { required: true })}
                type="text"
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder="First name"
                className="form-control   
                           block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              />
            </div>
            <div className="form-group mb-6">
              <input
                {...register("lName", { required: true })}
                type="text"
                id="exampleInput124"
                aria-describedby="emailHelp124"
                placeholder="Last name"
                className="form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              />
            </div>
          </div>
          <div className="form-group mb-6">
            <input
              {...register("email", { required: true })}
              type="email"
              id="exampleInput125"
              placeholder="Email address"
              className="form-control block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="form-group mb-6">
            <input
              {...register("password", { required: true })}
              type="password"
              id="exampleInput126"
              placeholder="Password"
              className="form-control block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="
                    w-full
                    px-6
                    py-2.5
                    bg-blue-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-blue-800 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReactDropzone2;
