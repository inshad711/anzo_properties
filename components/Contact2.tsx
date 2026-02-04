// "use client";
// import React, { useState } from "react";
// import { MapPin, Mail, Phone, Star } from "lucide-react";

// const ContactSection = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     email: "",
//     phone: "",
//     needs: "",
//     message: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Handle form submission logic here
//     console.log("Form submitted:", formData);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <section className="min-h-screen bg-[#FDFDFD] py-16 px-4 md:px-8 lg:px-16 font-sans">
//            {" "}
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
//                         {/* Left Side: Content & Image */}       {" "}
//         <div className="w-full lg:w-1/2 space-y-8">
//                     {/* Header Info */}         {" "}
//           <div className="space-y-4">
//                        {" "}
//             <div className="flex items-center gap-2 text-gray-500 uppercase tracking-widest text-sm font-semibold">
//                             <Star size={16} fill="currentColor" />             {" "}
//               <span>Contact Us</span>           {" "}
//             </div>
//                        {" "}
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
//                             Let's Collaborate With Us!            {" "}
//             </h1>
//                        {" "}
//             <p className="text-gray-500 text-lg max-w-md leading-relaxed">
//                             Discover inspiring stories, design trends,
//               innovations shaping modern architecture and timeless interiors.
//                        {" "}
//             </p>
//                      {" "}
//           </div>
//                     {/* Visual Area with Overlay Icons */}         {" "}
//           <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group">
//                         {/* Main Image - Replace URL as needed */}           {" "}
//             <img
//               src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
//               alt="Modern Architecture"
//               className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
//             />
//                                     {/* Info Cards Overlay */}           {" "}
//             <div className="absolute bottom-6 left-6 space-y-3 right-6 md:right-auto">
//                             {/* Address Overlay */}             {" "}
//               <div className="bg-black/40 backdrop-blur-md text-white p-4 rounded-2xl flex items-center gap-4 border border-white/20 transition-all hover:bg-black/50">
//                                {" "}
//                 <div className="bg-white/20 p-2 rounded-full">
//                                     <MapPin size={24} />               {" "}
//                 </div>
//                                {" "}
//                 <div className="text-sm">
//                                     <p>1901 Thornridge Cir. Shiloh,</p>
//                           <p>Hawaii 81063</p>               {" "}
//                 </div>
//                              {" "}
//               </div>
//                             {/* Contact Overlay */}             {" "}
//               <div className="bg-black/40 backdrop-blur-md text-white p-4 rounded-2xl flex items-center gap-4 border border-white/20 transition-all hover:bg-black/50">
//                                {" "}
//                 <div className="bg-white/20 p-2 rounded-full">
//                                     <Mail size={24} />               {" "}
//                 </div>
//                                {" "}
//                 <div className="text-sm">
//                                    {" "}
//                   <p className="font-medium">demo@example.com</p>
//                     <p>+629 555-0129</p>               {" "}
//                 </div>
//                              {" "}
//               </div>
//                          {" "}
//             </div>
//                      {" "}
//           </div>
//                  {" "}
//         </div>
//                 {/* Right Side: Form Card */}       {" "}
//         <div className="w-full lg:w-1/2">
//                    {" "}
//           <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-8 md:p-12 border border-gray-100">
//                        {" "}
//             <form onSubmit={handleSubmit} className="space-y-6">
//                                          {" "}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                 {/* First Name */}               {" "}
//                 <div className="space-y-2">
//                                    {" "}
//                   <label className="block text-sm font-semibold text-gray-700">
//                                         First Name{" "}
//                     <span className="text-red-500">*</span>
//                      {" "}
//                   </label>
//                                    {" "}
//                   <input
//                     type="text"
//                     name="firstName"
//                     required
//                     placeholder="Your full name"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all placeholder:text-gray-300"
//                   />
//                                  {" "}
//                 </div>
//                                 {/* Email Address */}               {" "}
//                 <div className="space-y-2">
//                                    {" "}
//                   <label className="block text-sm font-semibold text-gray-700">
//                                         Email Address{" "}
//                     <span className="text-red-500">*</span>
//                      {" "}
//                   </label>
//                                    {" "}
//                   <input
//                     type="email"
//                     name="email"
//                     required
//                     placeholder="Your email Address"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all placeholder:text-gray-300"
//                   />
//                                  {" "}
//                 </div>
//                                 {/* Phone Number */}               {" "}
//                 <div className="space-y-2">
//                                    {" "}
//                   <label className="block text-sm font-semibold text-gray-700">
//                                         Phone Number{" "}
//                     <span className="text-red-500">*</span>
//                      {" "}
//                   </label>
//                                    {" "}
//                   <input
//                     type="tel"
//                     name="phone"
//                     required
//                     placeholder="Your number"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all placeholder:text-gray-300"
//                   />
//                                  {" "}
//                 </div>
//                                 {/* Needs Select/Input */}               {" "}
//                 <div className="space-y-2">
//                                    {" "}
//                   <label className="block text-sm font-semibold text-gray-700">
//                                         What are your needs?{" "}
//                     <span className="text-red-500">*</span>
//                      {" "}
//                   </label>
//                                    {" "}
//                   <select
//                     name="needs"
//                     required
//                     value={formData.needs}
//                     onChange={handleChange}
//                     className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent bg-white transition-all text-gray-700 appearance-none"
//                     style={{
//                       backgroundImage:
//                         "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23cbd5e1'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")",
//                       backgroundRepeat: "no-repeat",
//                       backgroundPosition: "right 1.25rem center",
//                       backgroundSize: "1.25em",
//                     }}
//                   >
//                                        {" "}
//                     <option value="" disabled>
//                       Select a service
//                     </option>
//                                        {" "}
//                     <option value="design">Architecture Design</option>
//                               <option value="interior">Interior Design</option>
//                                      {" "}
//                     <option value="consulting">Consultation</option>
//                             <option value="other">Other</option>
//                      {" "}
//                   </select>
//                                  {" "}
//                 </div>
//                              {" "}
//               </div>
//                             {/* Message */}             {" "}
//               <div className="space-y-2">
//                                {" "}
//                 <label className="block text-sm font-semibold text-gray-700">
//                                     Write Message                {" "}
//                 </label>
//                                {" "}
//                 <textarea
//                   name="message"
//                   rows={5}
//                   placeholder="Your message here..."
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all placeholder:text-gray-300 resize-none"
//                 />
//                              {" "}
//               </div>
//                             {/* Submit Button */}             {" "}
//               <button
//                 type="submit"
//                 className="w-full md:w-auto px-10 py-4 bg-[#EFFF00] hover:bg-[#d9e600] text-black font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-lime-200 uppercase tracking-wider text-sm"
//               >
//                                 Send Your Request              {" "}
//               </button>
//                          {" "}
//             </form>
//                      {" "}
//           </div>
//                  {" "}
//         </div>
//              {" "}
//       </div>
//          {" "}
//     </section>
//   );
// };

// export default function Contact2() {
//   return (
//     <div className="bg-gray-50 min-h-screen">
//             <ContactSection />   {" "}
//     </div>
//   );
// }

// /// use my code and make same as image layout,contact section , using nextjs tsx and tailwindcss, and in image there is not dropdown in

"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { MapPin, Mail, Phone, Star } from "lucide-react";

interface FormData {
  firstName: string;
  email: string;
  phone: string;
  needs: string; // Keep as string, it works for both select and input
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    email: "",
    phone: "",
    needs: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className=" bg-zinc-950 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto pt-20 flex flex-col lg:flex-row gap-12 items-stretch">
        {/* Left Side: Content & Image */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-zinc-400 uppercase tracking-widest text-sm font-semibold">
              <Star size={16} fill="currentColor" className="text-[#c5a67c]" />
              <span>Contact Us</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-medium text-white leading-tight">
              Complete this form to <br className="md:block hidden" /> contact
              our team
            </h1>

            <p className="text-zinc-400 text-lg max-w-md leading-relaxed">
              Discover inspiring stories, design trends, and innovations shaping
              modern architecture.
            </p>
          </div>

          <div className="relative flex-1  rounded-[2rem] overflow-hidden shadow-2xl group border border-zinc-800 min-h-[350px]">
            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800"
              alt="Modern Architecture"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
            />

            <div className="absolute bottom-6 left-6 space-y-3 right-6 md:right-auto">
              <div className="bg-black/60 backdrop-blur-md text-white p-4 rounded-2xl flex items-center gap-4 border border-white/10 transition-all hover:bg-black/80">
                <div className="bg-[#EFFF00]/20 p-2 rounded-full text-[#c5a67c]">
                  <MapPin size={24} />
                </div>
                <div className="text-sm">
                  <p>1901 Thornridge Cir. Shiloh,</p>
                  <p className="text-zinc-300">Hawaii 81063</p>
                </div>
              </div>

              <div className="bg-black/60 backdrop-blur-md text-white p-4 rounded-2xl flex items-center gap-4 border border-white/10 transition-all hover:bg-black/80">
                <div className="bg-[#EFFF00]/20 p-2 rounded-full text-[#c5a67c]">
                  <Mail size={24} />
                </div>
                <div className="text-sm">
                  <p className="font-medium">demo@example.com</p>
                  <p className="text-zinc-300">+629 555-0129</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className="w-full lg:w-1/2">
          <div className="h-full bg-zinc-900 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl p-6 md:p-12 border border-zinc-800">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col h-full space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-zinc-300">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    placeholder="Your full name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-[#c5a67c] focus:border-transparent transition-all placeholder:text-zinc-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-zinc-300">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-[#c5a67c] focus:border-transparent transition-all placeholder:text-zinc-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-zinc-300">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Your number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-[#c5a67c] focus:border-transparent transition-all placeholder:text-zinc-500"
                  />
                </div>

                {/* UPDATED: Needs Text Input instead of Select */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-zinc-300">
                    What are your needs? <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="needs"
                    required
                    placeholder="e.g. Interior Design"
                    value={formData.needs}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-[#c5a67c] focus:border-transparent transition-all placeholder:text-zinc-500"
                  />
                </div>
              </div>

              <div className="space-y-2 flex-1 flex flex-col">
                <label className="block text-sm font-semibold text-zinc-300">
                  Write Message
                </label>
                <textarea
                  name="message"
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full flex-1 px-5 py-4 rounded-xl bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-[#c5a67c] focus:border-transparent transition-all placeholder:text-zinc-500 resize-none min-h-[150px]"
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-10 py-4 bg-[#c5a67c] hover:bg-white text-black font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-[#EFFF00]/10 uppercase tracking-wider text-sm"
              >
                Send Your Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Contact2() {
  return (
    <div className="bg-zinc-950">
      <ContactSection />
    </div>
  );
}
