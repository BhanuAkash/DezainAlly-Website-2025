// import React, { useState, useCallback } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles/FormPage.css";

// const servicesList = [
//   "3D Renderings",
//   "Virtual Tours",
//   "Interactive Unit Selector",
//   "Website",
//   "Branding",
//   "Lead Generation",
//   "Campaigns / Social Media",
// ];

// const FormPopup = () => {
//   const [form, setForm] = useState({
//     name: "",
//     company: "",
//     email: "",
//     phone: "",
//     typeOfProject: "Residential",
//     doors: "",
//     whyNow: "I’m not in a rush",
//     whyUs: "I don’t settle for average",
//   });
//   const [selectedServices, setSelectedServices] = useState([]);
//   const [errors, setErrors] = useState({});

//   const handleChange = useCallback((e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   }, []);

//   const toggleService = useCallback((service) => {
//     setSelectedServices((prev) =>
//       prev.includes(service)
//         ? prev.filter((s) => s !== service)
//         : [...prev, service]
//     );
//   }, []);

//   const validate = useCallback(() => {
//     const err = {};
//     if (!form.name.trim()) err.name = "Name is required";
//     if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email))
//       err.email = "Valid email required";
//     if (!form.phone.trim() || !/^\+?[0-9]{7,15}$/.test(form.phone))
//       err.phone = "Valid phone required";
//     return err;
//   }, [form]);

//   const handleSubmit = useCallback(
//     (e) => {
//       e.preventDefault();
//       const err = validate();
//       if (Object.keys(err).length) {
//         setErrors(err);
//         return;
//       }
//       setErrors({});
//       const payload = { ...form, services: selectedServices };
//       console.log("Submitting payload:", payload);
//       alert("Form submitted successfully!");
//       onClose(); // close popup after submit
//     },
//     [validate, form, selectedServices, onClose]
//   );

//   if (!show) return null;

//   return (
//     <div className="popup-overlay">
//       <div className="popup-container">
//         <div className="close-btn" onClick={onClose}>
//           &times;
//         </div>

//         <div className="container-fluid py-4">
//           <form onSubmit={handleSubmit}>
//             <div className="row align-items-center">
//               {/* Left Side */}
//               <div className="col-md-6 p-4">
//                 <h1 className="display-5 fw-bold">
//                   Let’s make <br />
//                   your project <br />
//                   <span className="italic-text">impossible to ignore</span>
//                 </h1>
//                 <p className="text-muted mt-3 mb-4">
//                   Complete this quick brief and see if we’re the right fit.
//                 </p>

//                 <div className="form-group mb-3">
//                   <input
//                     name="name"
//                     value={form.name}
//                     onChange={handleChange}
//                     type="text"
//                     className="form-control minimal-input"
//                     placeholder="Name"
//                   />
//                   {errors.name && (
//                     <small className="text-danger">{errors.name}</small>
//                   )}
//                 </div>

//                 <div className="form-group mb-3">
//                   <input
//                     name="company"
//                     value={form.company}
//                     onChange={handleChange}
//                     type="text"
//                     className="form-control minimal-input"
//                     placeholder="Company"
//                   />
//                 </div>

//                 <div className="form-group mb-3">
//                   <input
//                     name="email"
//                     value={form.email}
//                     onChange={handleChange}
//                     type="email"
//                     className="form-control minimal-input"
//                     placeholder="Email"
//                   />
//                   {errors.email && (
//                     <small className="text-danger">{errors.email}</small>
//                   )}
//                 </div>

//                 <div className="form-group mb-3">
//                   <input
//                     name="phone"
//                     value={form.phone}
//                     onChange={handleChange}
//                     type="tel"
//                     className="form-control minimal-input"
//                     placeholder="Phone"
//                   />
//                   {errors.phone && (
//                     <small className="text-danger">{errors.phone}</small>
//                   )}
//                 </div>

//                 <div className="d-flex gap-2 mt-3">
//                   <div className="flex-fill">
//                     <label className="small fw-bold">Type of project</label>
//                     <select
//                       name="typeOfProject"
//                       value={form.typeOfProject}
//                       onChange={handleChange}
//                       className="form-control"
//                     >
//                       <option>Residential</option>
//                       <option>Commercial</option>
//                       <option>Other</option>
//                     </select>
//                   </div>

//                   <div className="flex-fill">
//                     <label className="small fw-bold"># of doors</label>
//                     <input
//                       name="doors"
//                       value={form.doors}
//                       onChange={handleChange}
//                       type="number"
//                       className="form-control"
//                       placeholder="250"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Right Side */}
//               <div className="col-md-6 p-4">
//                 <div className="mb-4">
//                   <label className="small fw-bold d-block mb-2">
//                     What services are you interested in?
//                   </label>
//                   <div className="d-flex flex-wrap">
//                     {servicesList.map((service) => {
//                       const active = selectedServices.includes(service);
//                       return (
//                         <button
//                           key={service}
//                           type="button"
//                           onClick={() => toggleService(service)}
//                           className={`btn btn-sm m-1 px-3 rounded-pill ${active
//                             ? "btn-dark text-white"
//                             : "btn-outline-dark"
//                             }`}
//                         >
//                           {service}
//                         </button>
//                       );
//                     })}
//                   </div>
//                 </div>

//                 <div className="mb-3">
//                   <label className="small fw-bold">Why now?</label>
//                   <select
//                     name="whyNow"
//                     value={form.whyNow}
//                     onChange={handleChange}
//                     className="form-control"
//                   >
//                     <option>I’m not in a rush</option>
//                     <option>Right time for me</option>
//                     <option>Need it ASAP</option>
//                   </select>
//                 </div>

//                 <div className="mb-3">
//                   <label className="small fw-bold">Why us?</label>
//                   <select
//                     name="whyUs"
//                     value={form.whyUs}
//                     onChange={handleChange}
//                     className="form-control"
//                   >
//                     <option>I don’t settle for average</option>
//                     <option>Looking for the best</option>
//                     <option>Open to suggestions</option>
//                   </select>
//                 </div>

//                 <div className="text-end mt-4">
//                   <button
//                     type="submit"
//                     className="btn btn-outline-dark rounded-circle px-4 py-2"
//                   >
//                     Send request
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormPopup;

import React, { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/FormPage.css";

const servicesList = [
  "Signages & Outdoor Branding",
  "Branding & Creative Design",
  "Web Design & Development",
  "Digital Experiences",
  "Digital Marketing & Communication",
  "Print Media",
  "Photography & Product / Corporate Films",
  "Interior Design & Space Branding",
  "Events & Experiential Marketing",
];

const FormPopup = ({ show, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    typeOfProject: "Residential",
    whyNow: "I’m not in a rush",
    whyUs: "I don’t settle for average",
  });

  const [selectedServices, setSelectedServices] = useState([]);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const toggleService = useCallback((service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  }, []);

  const validate = useCallback(() => {
    const err = {};
    if (!form.name.trim()) err.name = "Name is required";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email))
      err.email = "Valid email required";
    if (!form.phone.trim() || !/^\+?[0-9]{7,15}$/.test(form.phone))
      err.phone = "Valid phone required";
    return err;
  }, [form]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const err = validate();
  //   setErrors(err);
  //   if (Object.keys(err).length) return;

  //   setLoading(true);

  //   const payload = {
  //     ...form,
  //     services: selectedServices,
  //   };

  //   try {

  //     const response = await fetch("https://dezainally.com/backend-files/contact.php", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(payload),
  //     });

  //     const result = await response.json();
  //     if (result.status === "success") {
  //       setShowThankYou(true);
  //     } else {
  //       alert("Error: " + result.message);
  //     }
  //   } catch (error) {
  //     alert("Network error, please try again later.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const err = validate();
    setErrors(err);
    if (Object.keys(err).length) return;

    setLoading(true);

    // ✅ Build FormData
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("company", form.company);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("typeOfProject", form.typeOfProject);
    formData.append("whyNow", form.whyNow);
    formData.append("whyUs", form.whyUs);
    formData.append("services", selectedServices.join(", "));

    try {
      const response = await fetch("https://peracause.com/backend-files/dezainally/contact-dezainally.php", {
        method: "POST",
        body: formData, // ✅ Do not include headers here
      });

      const result = await response.json();

      if (result.status === "success") {
        setShowThankYou(true);
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      alert("Network error, please try again later.");
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };





  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container animate-slide-down">
        <div
          className="close-btn d-flex align-items-center justify-content-center"
          onClick={onClose}
        >
          &times;
        </div>

        <div className="container-fluid p-4">
          <form onSubmit={handleSubmit}>
            <div className="row align-items-center">
              {/* Left Side */}
              <div className="col-md-6 p-4">
                <h1 className="display-5 fw-bold futura-bold text-green">
                  Let’s make your project  
                  <span className="italic-text"> impossible to ignore</span>
                </h1>
                <p className="text-muted mt-3 mb-4">
                  Complete this quick brief and see if we’re the right fit.
                </p>

                <div className="form-group mb-3">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    className="form-control minimal-input"
                    placeholder="Name"
                  />
                  {errors.name && <small className="text-danger">{errors.name}</small>}
                </div>

                <div className="form-group mb-3">
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    type="text"
                    className="form-control minimal-input"
                    placeholder="Company"
                  />
                </div>

                <div className="form-group mb-3">
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    className="form-control minimal-input"
                    placeholder="Email"
                  />
                  {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>

                <div className="form-group mb-3">
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    type="tel"
                    className="form-control minimal-input"
                    placeholder="Phone"
                  />
                  {errors.phone && <small className="text-danger">{errors.phone}</small>}
                </div>

                <div className="d-flex gap-2 mt-3">
                  <div className="flex-fill">
                    <label className="small fw-bold">Type of project</label>
                    <select
                      name="typeOfProject"
                      value={form.typeOfProject}
                      onChange={handleChange}
                      className="form-control"
                    >
                      <option>Real Estate</option>
                      <option>Software / IT Company</option>
                      <option>Restaurant / Food Business</option>
                      <option>Fashion / Clothing Brand</option>
                      <option>Retail / E-Commerce</option>
                      <option>Corporate / B2B Business</option>
                      <option>Education / Training Institute</option>
                      <option>Manufacturing / Industrial</option>
                      <option>Finance / Consultancy</option>
                      <option>Events / Entertainment</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="col-md-6 p-4">
                <div className="mb-4">
                  <label className="small fw-bold d-block mb-2">
                    What services are you interested in?
                  </label>
                  <div className="d-flex flex-wrap">
                    {servicesList.map((service) => {
                      const active = selectedServices.includes(service);
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`btn btn-sm m-1 px-3 rounded-pill fs-7 ${active ? "btn-dark text-white" : "btn-outline-dark"
                            }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mb-3">
                  <label className="small fw-bold">Why now?</label>
                  <select
                    name="whyNow"
                    value={form.whyNow}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option>I’m not in a rush</option>
                    <option>Right time for me</option>
                    <option>Need it ASAP</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="small fw-bold">Why us?</label>
                  <select
                    name="whyUs"
                    value={form.whyUs}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option>I don’t settle for average</option>
                    <option>Looking for the best</option>
                    <option>Open to suggestions</option>
                  </select>
                </div>

                <div className="send-btn-glow">
                  <button
                    type="submit"
                    className="btn btn-outline-dark rounded-circle send-btn"
                  >
                    Send request
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Loader */}
      {loading && (
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      )}

      {/* Thank You Popup */}
      {showThankYou && (
        <div className="thankyou-popup animate-slide-down">
          <div className="popup-content">
            <h3>Thank You!</h3>
            <p>Your message has been sent successfully. Our team will contact you soon.</p>
            <button onClick={() => setShowThankYou(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormPopup;
