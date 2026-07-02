import { NavLink } from "react-router-dom";
//import { useForm } from "react-hook-form";
import { useState } from "react";
import useForm from '../hooks/useForm';
import "../css/custom.css";


function Contact() {
  const {
    register,
    //handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [error, setError] = useState("");
    //Custom hook call
    

  console.log(watch("firstName")); // watch input value by passing the name of it

  const checkInput = (element) => {
    let value = element.target.value;
    switch (element.target.name) {
      case "FisrtName":
        console.log(value);
        setError("First Name Error");
        break;
      case "LastName":
        console.log(value);
        break;
      default:
        break;
    }




  };

    //Final submit function
    const formLogin = () => {

        console.log("Callback function when form is submitted!");
        console.log("Form Values ", values);
      }
      const handleSubmit = (event) => {
        if(event) event.preventDefault();

        if(Object.keys(errors).length === 0 && Object.keys(values).length !==0 ){
            callback();

        }else{
            alert("There is an Error!");
        }
    }

  return (
    <>

     {/* Breadcrumb Start */}
 <div className="flex flex-col items-center py-28">
      <h2 className="text-6xl font-bold mb-4 secondaryColor uppercase">About Us</h2>
      <div className="flex items-center">
        <span className="text-white text-base ">Contact Us</span>
        <div className="h-2 w-2 rounded-full secondaryBg mx-2"></div>
        <span className="text-white text-base">Contact</span>
      </div>
    </div>
 {/* Breadcrumb End */}
      <div className="flex flex-col md:flex-row">
      <div className="md:w-full w-1/2 bg-gray-100 p-8 contact-section">
        <div className="text-sm text-gray-500">Reach out</div>
        <h2 className="text-lg font-bold mt-2">
          Why not leave a message or give us a call?
        </h2>
        <p className="mt-4">
          Axcepteur sint occaecat atat non proident, sunt culpa officia deserunt
          mollit anim id est labor umLor emdolor
        </p>
        <div className="flex items-center mt-6">
          <div className="bg-blue-500  p-2 mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12zm0-8a1 1 0 110-2 1 1 0 010 2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium">Phone</p>
            <p>123-456-7890</p>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <div className="bg-green-500  p-2 mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12zm0-8a1 1 0 110-2 1 1 0 010 2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium">Email</p>
            <p>info@example.com</p>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <div className="bg-red-500 rounded-full p-2 mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12zm0-8a1 1 0 110-2 1 1 0 010 2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium">Address</p>
            <p>123 Street, City, Country</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-white contact-form pl-8">
        <form>
          <input
            type="text"
            placeholder="Subject"
            className="w-full border rounded-lg px-4 py-2 mb-4"
          />
          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>
            <div className="w-1/2 ml-2">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>
          </div>
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Enter your message"
            className="w-full border rounded-lg px-4 py-2 mb-4"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Contact;
