import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormContext } from "../Context/FormContext";
import { API_PATHS, BASE_URL } from "../Utils/apiPaths";
import axiosInstance from "../Utils/axiosInstance";
import { FaSpinner } from "react-icons/fa";
import { useDashboard } from "../Context/DashboardContext";

const generateTrackingNumber = () => {
  const prefix = "INV";
  const randomNum = Math.floor(1000 + Math.random() * 9000); // 4-digit random
  const datePart = new Date()
    .toISOString()
    .replace(/[^0-9]/g, "")
    .slice(4, 8); // MMDD
  return `${prefix}-${datePart}-${randomNum}`;
};
function Spinner() {
  return <FaSpinner className="spinner" />;
} 

export default function ItemDetail() {
  const { formData, updateFormData } = useFormContext();
   const { setActiveComponent } = useDashboard(); 
  const [isLoading, setIsLoading] = useState(false);
  const trackno = generateTrackingNumber();

  useEffect(() => {
    console.log("Form data updated:", formData);
  }, [formData]);
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    // Store the File object directly in formData
    updateFormData({ [name]: files[0] });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };
const handleFormSubmission = async (e) => {
  e.preventDefault();
  setIsLoading(true); // Start loading
  const formDataToSubmit = new FormData();

  // Append all formData fields to formDataToSubmit
  Object.entries(formData).forEach(([key, value]) => {
    // Skip if value is undefined or null
    if (value !== undefined && value !== null) {
      formDataToSubmit.append(key, value);
    }
  });

  // Ensure trackno is included (add if your form has it)
  if (!formData.trackno) {
    // Generate or include your tracking number logic here
    formDataToSubmit.append("trackno", trackno);
  }

  try {
    const response = await axiosInstance.post(
      API_PATHS.INVENTORY.ADD_RECORD,
      formDataToSubmit,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("Submission successful:", response.data);
    
    // Show success toast
   toast.success('Record added successfully!', {
        position: "top-right",
        autoClose: 3000, // Reduced from 5000 to 3000 for quicker transition
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClose: () => {
          // This will execute when the toast closes
          setActiveComponent('Overview');
        }
      });
    
    return response.data;
  } catch (error) {
    console.error("Submission error:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
    });
    
    // Show error toast
    toast.error(`Submission failed: ${error.response?.data?.message || error.message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    
    throw error;
  } finally {
    setIsLoading(false); // Stop loading in any case
  }
};
  return (
    <div>
      <div className="mt-5">
        <h1 className="font-bold my-5"> Item Detail</h1>
      </div>
      <form onSubmit={handleFormSubmission}>
        <div>
          <div className="lg:flex justify-between  gap-10">
            <div>
              <label htmlFor="dob">Date of Birth</label>
              <input
                id="dob"
                type="date"
                name="dateofbirth"
                value={formData.dateofbirth || ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-400"
              />
            </div>
            <div className="mt-2 lg:mt-0">
              <label htmlFor="fullName">
                Government-issued ID (passport, driver’s license, national ID)
              </label>
              <input
                type="file"
                name="governmentID"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-400"
              />
            </div>
          </div>

          <div className=" flex justify-between my-3 ">
            <div>
              <label htmlFor="proof">
                Proof of address (utility bill, bank statement)
              </label>
              <input
                id="proof"
                type="file"
                name="proofofaddress"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-bold my-5">Details About the Stored Items</h1>
        </div>
        <div className="lg:flex gap-15">
          <div>
            <label htmlFor="inventory">Inventory List</label>
            <input
              id="inventory"
              type="text"
              name="inventorylist"
              value={formData.inventorylist || ""}
              onChange={handleChange}
              placeholder="Description of each item (e.g., gold bars, diamond ring, antique jewelry)"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-400"
            />
          </div>

          <div className="mt-3 lg:mt-0">
            <label htmlFor="weight">Weight & Purity</label>
            <input
              id="weight"
              type="text"
              name="weightandpurity"
              value={formData.weightandpurity || ""}
              onChange={handleChange}
              placeholder="for gold/silver, e.g., 24K gold chain, 50 grams"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-400"
            />
          </div>

          <div className="mt-3 ">
            <label htmlFor="photo">Photographs or Videos </label>
            <input
              id="photo"
              type="file"
              name="photographorvideo"
              onChange={handleFileChange}
              placeholder="for verification"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-400"
            />
          </div>
        </div>
        <div className="lg:flex gap-10">
          <div className="mt-3 lg:mt-0">
            <label htmlFor="estimate">Estimated Value</label>
            <input
              id="estimate"
              type="text"
              name="estimatedvalue"
              value={formData.estimatedvalue || ""}
              onChange={handleChange}
              placeholder="for insurance purposes"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-400"
            />
          </div>
          <div className="mt-3 lg:mt-0">
            <label htmlFor="serial">Serial Numbers</label>
            <input
              id="serial"
              type="text"
              name="serialnumber"
              value={formData.serialnumber || ""}
              onChange={handleChange}
              placeholder="if applicable, e.g., for branded jewelry"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-400"
            />
          </div>
        </div>
        <div className="my-10">
          <h2 className="font-bold">Storage Agreement & Contract Terms</h2>
        </div>
        <div className="lg:flex gap-10">
          <div className="mt-3 lg:mt-0">
            <label htmlFor="duration">Duration of storage</label>
            <select
              id="duration"
              name="durationofstorage"
              value={formData.durationofstorage || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-400"
            >
              <option>short-term</option>
              <option>long-term</option>
            </select>
          </div>
          <div className="mt-3 lg:mt-0">
            <label htmlFor="duration">
              Access rules (how often you can retrieve items)
            </label>
            <select
              id="duration"
              name="duration"
              value={formData.duration || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-400"
            >
              <option>6 Months</option>
              <option>1 Year</option>
              <option>2 Year</option>
              <option>3 Year</option>
              <option>4 Year</option>
              <option>5 Year</option>
            </select>
          </div>
        </div>
        <div>
          <div className="my-3">
            <label htmlFor="serial">
              Insurance coverage (whether included or optional)
            </label>
            <input
              id="serial"
              type="text"
              name="insuracecoverage"
              value={formData.insuracecoverage || ""}
              onChange={handleChange}
              placeholder="if applicable, e.g., for branded jewelry"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-400"
            />
          </div>
          <a href="#">
            {" "}
            <small className="text-amber-500">
              {" "}
              Check Liability Clauses (what happens in case of theft, damage, or
              natural disasters)
            </small>
          </a>
        </div>
        <div className="flex gap-2">
          <button
            type="submit"
             disabled={isLoading}
            className="bg-amber-500 hover:bg-amber-600 cursor-pointer text-white p-3 rounded-lg text-[11px]"
          >
            {isLoading ? (
              <>
                <Spinner />
                Processing...
              </>
            ) : (
              "Save"
            )}
          </button>
          <button className="bg-transparent cursor-pointer border border-gray-200 hover:border-gray-400 text-black p-3 rounded-lg text-[11px]">
            Decline
          </button>
        </div>
      </form>
    </div>
  );
}
