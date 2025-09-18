// 

"use client"

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
function Form() {
     const router = useRouter();
  const [formData, setFormData] = useState({
      fullName: "",
    email: "",
    mobile: "",       
    pinCode: "",
    pageName: "SoundBox Page", 

    });
  
    const [errors, setErrors] = useState({});
  
  
    // Handle input change
  const validate = (name, value) => {
    switch (name) {
      case "fullName":
        if (!value.trim()) return "Full Name is required";
        break;
      case "email":
        if (!value) return "Email is required";
        if (!/\S+@\S+\.\S+/.test(value)) return "Enter a valid email";
        break;
      case "mobile":
        if (!value) return "Mobile number is required";
        if (!/^\d{10}$/.test(value)) return "Enter a valid 10-digit mobile number";
        break;
     
      default:
        return "";
    }
    return "";
  };
  
    // Validate form
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "pinCode") {
    if (!/^\d*$/.test(value)) return; 
  }
    setFormData({
      ...formData,
      [name]: value,
    });
  
    // Re-validate this field on change
    const errorMsg = validate(name, value);
    setErrors({
      ...errors,
      [name]: errorMsg,
    });
  };
  
  // Validate all fields at once
  const validateForm = () => {
    let newErrors = {};
  
    Object.keys(formData).forEach((key) => {
      const errorMsg = validate(key, formData[key]);
      if (errorMsg) newErrors[key] = errorMsg;
    });
  
    return newErrors;
  };
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const validationErrors = validateForm(); // ✅ sahi function call
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; 
    }
  
    try {
      const response = await axios.post(
        "https://pgsuit.xoomsales.com/api/ZyroCustomer/AddCustomer",
        {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.mobile,  // ✅ consistent key use karo
          Pincode: formData.pinCode,
          pageName: formData.pageName,
          
        }
      );
  
  
    console.log(response.data)
    if (response.data.success) {
          // setApiMessage(res.data.message); // ✅ "Customer added successfully."
          setFormData({
            fullName: "",
            
            email: "",
            mobile: "",
            pinCode: "",
            pageName: "SoundBox Page",
          });
           setErrors({});
          //  alert(response.data.message);
          //  console.log(formData);
             router.push("/thank-you")
        } 
        else {
          alert("Something went wrong, please try again");
        }
      }
    
    catch (error) {
      console.error("API Error:", error);
      alert("API Error:", error);
      
    }
  };
  return (
    <section className="mt-[150px]">
      <div className="max-w-screen-lg mx-auto px-[12px] xl:px-0 ">
        <div className="gap-[25px] lg:flex justify-between items-center bg-[#0E0624] rounded-[20px] relative max-[360px]:px-[20px] px-[33px] pt-[40px] pb-[28px] lg:pl-[50px] lg:pr-[30px] lg:pt-[56px] lg:pb-[43px] z-40 overflow-hidden">
          <div className="">
            <p className="text-[#ffffff] lg:text-[38px] text-[26px] leading-[34px] lg:leading-[150%] font-semibold">
              Get a Call Back
            </p>
            <p className="text-white70 lg:text-[18px]  text-[14px] leading-[25px] font-normal lg:leading-[30px] lg:font-medium pt-[9px]">
              Join us to simplify payments, increase efficiency, and grow your
              business.
            </p>
            <form onSubmit={handleSubmit} className=" mt-[30px] lg:mt-[55px]">
              <div className="flex  gap-[15px] flex-col sm:flex-row">
                 <div className="w-full lg:w-[275px]">
                   <input type="text" name="fullName"  value={formData.fullName} onChange={handleChange} className="border border-white20 rounded-[30px] h-[46px] lg:h-[53px] bg-backgroundColor2 text-[#B8B8B8] text-[18px] font-medium  outline-none pl-[35px] pr-[20px] w-full" placeholder="Name" />
                             {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
          )}
                 </div>
         
                 <div className="w-full lg:w-[275px]">
                   <input type="text" name="mobile"  value={formData.mobile} onChange={handleChange} className="border border-white20 rounded-[30px] h-[46px] lg:h-[53px] bg-backgroundColor2 text-[#B8B8B8] text-[18px] font-medium  outline-none pl-[35px] pr-[20px] w-full" placeholder="Phone"  />
                             {errors.mobile && (
            <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
          )}
                 </div>
              </div>
              <div className="mt-[15px] flex  gap-[15px] flex-col sm:flex-row">
               <div className="w-full lg:w-[275px]">
                   <input type="text"name="email"  value={formData.email}  onChange={handleChange} className="border border-white20 rounded-[30px] h-[46px] lg:h-[53px] bg-backgroundColor2 text-[#B8B8B8] text-[18px] font-medium  outline-none pl-[35px] pr-[20px] w-full" placeholder="Email"  />
                             {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
               </div>
                 <div className="w-full lg:w-[275px]">
                   <input type="text" name="pinCode"  value={formData.pinCode} onChange={handleChange} className="border border-white20 rounded-[30px] h-[46px] lg:h-[53px] bg-backgroundColor2 text-[#B8B8B8] text-[18px] font-medium  outline-none pl-[35px] pr-[20px]  w-full" placeholder="Pincode"  />
 
                 </div>
              </div>
             <div className="flex sm:justify-center lg:justify-start mt-[40px]">
               <button className="text-[17px] font-semibold text-[#FFF] bg-[#4F31B4] rounded-[46px] h-[46px] lg:h-[55px] w-[197px] cursor-pointer">Submit</button>
             </div>
            </form>
          </div>
          <div className="form-input-gradient "></div>
          <div className="form-soundbox-gradient"></div>
          <div className=" custom-bg flex justify-center items-center z-10">
            <img src='/image/soundbox/soundbox.svg' alt="soundBox" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
