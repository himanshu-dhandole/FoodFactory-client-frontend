// import React from "react";
// import "./Contactus.css"
// const Contactus = () => {
//   return (
//     <div>
//       <section className="cta-section py-5 bg-gradient">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-lg-6 mb-4 mb-lg-0">
//               <h2 className="display-4 font-weight-bold text-white mb-4">
//                 Want to Contact us ?
//               </h2>
//               <p className="lead text-white-50 mb-4">
//                 Join thousands of satisfied customers who have taken their
//                 operations to the next level with our innovative solutions.
//               </p>
//               <div className="d-flex flex-wrap">
//                 <button className="btn btn-light btn-lg font-weight-bold mr-5 mb-3">
//                   Get Started
//                 </button>
//                 <button className="btn btn-outline-light btn-lg mb-3 ">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//             <div className="col-lg-6">
//               <div className="card border-0 shadow-lg">
//                 <div className="card-body p-5">
//                   <h3 className="card-title mb-4">Fill  your details</h3>
//                   <form>
//                     <div className="form-group">
//                       <input
//                         type="text"
//                         className="form-control form-control-lg"
//                         placeholder="Your Name"
//                       />
//                     </div>
//                     <div className="form-group">
//                       <input
//                         type="email"
//                         className="form-control form-control-lg mt-2"
//                         placeholder="Your Email"
//                       />
//                     </div>
//                     <div className="form-group">
//                       <input
//                         type="text"
//                         className="form-control form-control-lg mt-2"
//                         placeholder="discription ..."
//                       />
//                     </div>
//                     <button
//                       type="submit"
//                       className="btn btn-primary btn-lg btn-block mt-2"
//                     >
//                       Submit 
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contactus;
import React, { useState } from "react";
import "./Contactus.css";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }
    
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="contact-page">
      {/* Hero Section with Background */}
      <section className="contact-hero position-relative py-5 bg-dark text-white">
        <div className="contact-hero-overlay"></div>
        <div className="container position-relative">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3">Get in Touch</h1>
              <p className="lead mb-4">
                I'd love to hear from you. Whether you have a question about our services,
                need support, or want to collaborate, our team is here to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-section py-5">
        <div className="container">
          <div className="row">
            {/* Contact Information */}
            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="contact-info bg-white rounded-3 shadow-sm p-4 h-100">
                <h2 className="fw-bold mb-4">Contact Information</h2>
                <p className="text-muted mb-4">
                  Hey ! I am Himanshu D Dhandole , feel free to Contact me any time.
                </p>
                
                <div className="contact-details">
                  <div className="d-flex mb-4">
                    <div className="contact-icon me-3">
                      <i className="bi bi-geo-alt text-primary fs-4"></i>
                    </div>
                    <div>
                      <h5 className="fw-bold">My Location</h5>
                      <p className="text-muted mb-0">
                        441107 Nagpur - Maharastra 
                      </p>
                    </div>
                  </div>
                  
                  
                  
                  <div className="d-flex mb-4">
                    <div className="contact-icon me-3">
                      <i className="bi bi-envelope text-primary fs-4"></i>
                    </div>
                    <div>
                      <h5 className="fw-bold">Email Me</h5>
                      <p className="text-muted mb-0">
                        <a href="mailto:info@yourcompany.com" className="text-decoration-none">dhandolehimanshu@gmail.com</a><br />
                        <a href="mailto:support@yourcompany.com" className="text-decoration-none">info.teamarc@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="social-links mt-5">
                  <h5 className="fw-bold mb-3">Connect With Us</h5>
                  <div className="d-flex gap-2">
                    <a href="#" className="btn btn-outline-primary rounded-circle p-2" aria-label="Github">
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="#" className="btn btn-outline-primary rounded-circle p-2" aria-label="Twitter">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#" className="btn btn-outline-primary rounded-circle p-2" aria-label="Instagram">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#" className="btn btn-outline-primary rounded-circle p-2" aria-label="LinkedIn">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                
                
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="contact-form bg-white rounded-3 shadow-sm p-4 p-lg-5">
                <h2 className="fw-bold mb-4">Send Us a Message</h2>
                
                {submitSuccess ? (
                  <div className="alert alert-success" role="alert">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Thank you for your message! I'll get back to you shortly.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Full Name <span className="text-danger">*</span></label>
                        <input
                          type="text"
                          className={`form-control ${formErrors.name ? 'is-invalid' : ''}`}
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                        />
                        {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
                      </div>
                      
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email Address <span className="text-danger">*</span></label>
                        <input
                          type="email"
                          className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                        />
                        {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                      </div>
                      
                      <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 "
                        />
                      </div>
                      
                      <div className="col-md-6">
                        <label htmlFor="subject" className="form-label">Subject</label>
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="How can we help you?"
                        />
                      </div>
                      
                      <div className="col-12">
                        <label htmlFor="message" className="form-label">Message <span className="text-danger">*</span></label>
                        <textarea
                          className={`form-control ${formErrors.message ? 'is-invalid' : ''}`}
                          id="message"
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Please provide details about your inquiry..."
                        ></textarea>
                        {formErrors.message && <div className="invalid-feedback">{formErrors.message}</div>}
                      </div>
                      
            
                      
                      <div className="col-12 mt-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg px-5"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                              Sending...
                            </>
                          ) : (
                            'Submit Message'
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section py-5 bg-primary text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h2 className="fw-bold mb-3">Ready to get started?</h2>
              <p className="lead mb-0">
                Join thousands of satisfied customers who have taken their
                operations to the next level with our innovative solutions.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="/register" className="btn btn-light btn-lg me-2">
                Get Started
              </a>
              <a href="/demo" className="btn btn-outline-light btn-lg">
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactus;