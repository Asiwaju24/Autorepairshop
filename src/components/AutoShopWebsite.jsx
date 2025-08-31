import { useState } from "react";
import React from "react";
import { Mail, Clock, Settings, Home, User, Phone } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import Hero from "../assets/hero-car1.jpg"; // Replace with your actual image path

const services = [
  {
    id: 1,
    title: "Oil Change",
    description:
      "Complete oil and filter change using premium synthetic oil to keep your engine running smoothly.",
    icon: <Settings className="h-8 w-8 text-blue-600" />,
    price: "9000.99",
    duration: "30 min",
  },
  {
    id: 2,
    title: "Brake Service",
    description:
      "Inspection and replacement of brake pads, rotors, and fluid to ensure your safety on the road.",
    icon: <Settings className="h-8 w-8 text-blue-600" />,
    price: "129000.99+",
    duration: "1-2 hours",
  },
  {
    id: 3,
    title: "Battery Replacement",
    description:
      "Professional battery testing and replacement with top-quality batteries for reliable starts.",
    icon: <Settings className="h-8 w-8 text-blue-600" />,
    price: "59000",
    duration: "30 min",
  },
  {
    id: 4,
    title: "Engine Diagnostics",
    description:
      "Advanced computer diagnostics to identify and resolve check engine lights and performance issues.",
    icon: <Settings className="h-8 w-8 text-blue-600" />,
    price: "8999.99",
    duration: "1 hour",
  },
  {
    id: 5,
    title: "Tire Rotation",
    description:
      "Proper tire rotation to ensure even wear and extend the life of your tires.",
    icon: <Settings className="h-8 w-8 text-blue-600" />,
    price: "14000.99",
    duration: "30 min",
  },
  {
    id: 6,
    title: "Full Tune-Up",
    description:
      "Comprehensive service including spark plugs, filters, fluids, and system checks for optimal performance.",
    icon: <Settings className="h-8 w-8 text-blue-600" />,
    price: "199000.99+",
    duration: "2-3 hours",
  },
];

export default function AutoShopWebsite() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Fake submission delay
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
     <section
  className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white"
  id="home"
>
  <div className="container mx-auto px-4 py-24 md:py-32">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      {/* Left Content */}
      <div className="max-w-3xl">
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">
          Expert Auto Repair Services You Can Trust
        </h1>
        <p className="mb-8 text-xl text-gray-300">
          Quality automotive care with honest pricing and exceptional
          customer service.
        </p>

        <div className="flex flex-wrap gap-4">
          <HashLink
            smooth
            to="#contact"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-medium text-white transition"
          >
            Book an Appointment
          </HashLink>

          <HashLink
            smooth
            to="#service"
            className="border border-white px-8 py-4 rounded-lg text-lg text-white hover:bg-white hover:text-gray-900 transition"
          >
            Our Services
          </HashLink>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center md:justify-end">
        <img
          src={Hero}   // put your image in public/ folder or import it
          alt="Hero Car"
          className="w-full h-[400px] max-w-md rounded-lg shadow-lg"
        />
      </div>

    </div>
  </div>
</section>


      {/* About Section */}
      <section className="py-16" id="about">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl">
            About Our Auto Shop
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            With over 20 years of experience, our certified technicians provide
            reliable and affordable auto repair services.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex justify-center items-center w-16 h-16 rounded-full bg-blue-100 mx-auto">
                <Settings className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Techs</h3>
              <p className="text-gray-600">
                ASE-certified professionals with extensive training.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex justify-center items-center w-16 h-16 rounded-full bg-blue-100 mx-auto">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Turnaround</h3>
              <p className="text-gray-600">
                Most repairs completed same day or within 24 hours.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex justify-center items-center w-16 h-16 rounded-full bg-blue-100 mx-auto">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Warranty</h3>
              <p className="text-gray-600">
                12-month/12,000-mile warranty on all repairs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-100 py-16" id="service">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-12 md:text-4xl">
            Our Services
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 flex justify-center items-center rounded-full bg-blue-100">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{service.title}</h3>
                    <p className="text-sm text-gray-500">
                      {service.duration} •{" "}
                      <span className="text-blue-600 font-medium">
                        ₦ {service.price}
                      </span>
                    </p>
                  </div>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16" id="contact">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-center text-3xl font-bold mb-12 md:text-4xl">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Get in Touch</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-3 text-gray-600">
                  <User className="text-blue-600" /> +2349066964407
                </p>
                <p className="flex items-center gap-3 text-gray-600">
                  <Phone className="text-blue-600" /> +2347054453539
                </p>
                <p className="flex items-center gap-3 text-gray-600">
                  <Mail className="text-blue-600" /> arautomotivetechnologycompany@gmail.com
                </p>
                <p className="flex items-center gap-3 text-gray-600">
                  <Clock className="text-blue-600" /> Mon-Fri: 8am - 6pm | Sat:
                  9am - 3pm
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form
  action="https://formspree.io/f/xjkewybk"  // 🔹 Replace with your real Formspree endpoint
  method="POST"
  className="bg-white shadow-md rounded-lg p-6 space-y-4"
>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="w-full border p-3 rounded"
  />

  <div className="grid md:grid-cols-2 gap-4">
    <input
      type="email"
      name="email"
      placeholder="Email"
      required
      className="w-full border p-3 rounded"
    />
    <input
      type="text"
      name="phone"
      placeholder="Phone"
      required
      className="w-full border p-3 rounded"
    />
  </div>

  <select
    name="service"
    required
    className="w-full border p-3 rounded"
  >
    <option value="">Select a Service</option>
    {services.map((s) => (
      <option key={s.id} value={s.title}>
        {s.title}
      </option>
    ))}
  </select>

  <textarea
    name="message"
    placeholder="Describe your issue"
    rows="4"
    required
    className="w-full border p-3 rounded"
  />

  <button
    type="submit"
    className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
  >
    Send Request
  </button>
</form>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>
          © {new Date().getFullYear()} AR AutoRepair. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
