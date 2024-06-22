const RegisterForm = () => {
  return (
    <form className="max-w-md mx-auto p-8 flex flex-col justify-center space-y-8">
      <h3 className="mb-5 text-4xl font-extrabold text-[#006A51]  ">Join Us</h3>
      <ul className="grid w-full md:grid-cols-3">
        {["member", "sponsor", "partner"].map((role) => (
          <li>
            <input
              type="radio"
              id={role}
              name="roleName"
              value={role}
              className="hidden peer"
              required
            />
            <label
              htmlFor={role}
              className="inline-flex items-center justify-center w-full py-2 px-5  border border-gray-200  cursor-pointer peer-checked:bg-[#006a4e] peer-checked:border-blue-600 peer-checked:text-white hover:text-black hover:bg-gray-100 shadow text-gray-600 transition-all duration-300 origin-center"
            >
              <div className="block text-center">
                <div className="capitalize text-sm font-bold ">{role}</div>
              </div>
            </label>
          </li>
        ))}
      </ul>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="email"
          name="floating_email"
          id="floating_email"
          className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2  appearance-none  border-gray-600 focus:border-[#006A51] focus:outline-none focus:ring-0  peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_email"
          className="peer-focus:font-medium absolute text-lg bg-transparent text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#006A51] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
        >
          Email address
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="password"
          name="floating_password"
          id="floating_password"
          className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2  appearance-none  border-gray-600 focus:border-[#006A51] focus:outline-none focus:ring-0  peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_password"
          className="peer-focus:font       -medium absolute  text-lg  text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#006A51]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
        >
          Password
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="password"
          name="repeat_password"
          id="floating_repeat_password"
          className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2  appearance-none  border-gray-600 focus:border-[#006A51] focus:outline-none focus:ring-0  peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_repeat_password"
          className="peer-focus:font-medium absolute  text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#006A51] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Confirm password
        </label>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_first_name"
            id="floating_first_name"
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2  appearance-none  border-gray-600 focus:border-[#006A51] focus:outline-none focus:ring-0  peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_first_name"
            className="peer-focus:font-medium absolute  text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#006A51] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            First name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_last_name"
            id="floating_last_name"
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2  appearance-none 
             border-gray-600 focus:border-[#006A51] focus:outline-none focus:ring-0  peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_last_name"
            className="peer-focus:font-medium absolute  text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-focus:text-[#006A51] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Last name
          </label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="floating_phone"
            id="floating_phone"
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2  appearance-none  border-gray-600 focus:border-[#006A51] focus:outline-none focus:ring-0  peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_phone"
            className="peer-focus:font-medium absolute  text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-focus:text-[#006A51] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone number
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_company"
            id="floating_company"
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2  appearance-none  border-gray-600 focus:border-[#006A51] focus:outline-none focus:ring-0  peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_company"
            className="peer-focus:font-medium absolute  text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-focus:text-[#006A51] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Company (Ex. Google)
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="hover:text-white bg-gray-100 hover:bg-[#006A51] focus:ring-4 focus:outline-none  rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  focus:ring-[#006A51] font-bold"
      >
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
