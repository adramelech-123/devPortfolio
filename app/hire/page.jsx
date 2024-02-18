"use client"
import Image from "next/image";
import { useState } from "react";

const Hire = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })

  const [submitting, setSubmitting] = useState(false)

  const handleInputChange = (e) => {

    const {name, value} = e.target
    setFormData({
      ...formData, 
      [name]:value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    // Send Email
    const response = await fetch('api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    const {success, error} = await response.json()

    if(success) {
      alert('Your inquiry has been successfully submitted!')
    } else if(error) { 
      console.log(error)
      alert('An error occured while submitting your inquiry!')
    }

    setSubmitting(false)
  }

  return (
    <section className="flex flex-col items-center  w-3/4 mx-auto">
      <h1 className="text-5xl font-extrabold py-2 text-transparent bg-clip-text bg-gradient-to-l from-purple-600 to-purplePrimary">
        CONTACT
      </h1>

      <div
        className={
          "flex flex-col w-full md:flex-row items-center md:gap-[100px] mt-10"
        }
      >
        <div className={"flex-1 h-[400px] relative"}>
          <Image
            src="/email.gif"
            alt=""
            fill
            className={"hidden md:block object-contain"}
          />
        </div>
        <div className={"md:flex-1 w-full"}>
          <form onSubmit={handleSubmit} className={"flex flex-col gap-[20px]"}>
            <input
              className="bg-white/70 text-gray-700 rounded-lg p-3 ring-1 ring-gray-200 drop-shadow-md"
              name="firstName"
              type="text"
              placeholder="First Name"
              onChange={handleInputChange}
              autoComplete="off"
            />
            <input
              className="bg-white/70 text-gray-700 rounded-lg p-3 ring-1 ring-gray-200 drop-shadow-md"
              name="lastName"
              type="text"
              placeholder="Last Name"
              onChange={handleInputChange}
              autoComplete="off"
            />
            <input
              className="bg-white/70 text-gray-700 rounded-lg p-3 ring-1 ring-gray-200 drop-shadow-md"
              name="email"
              type="email"
              placeholder="Email Address"
              onChange={handleInputChange}
              autoComplete="off"
            />
            <textarea
              name="message"
              id=""
              cols="20"
              rows="5"
              placeholder="Message"
              className="resize-none bg-white/70 text-gray-700 rounded-lg p-3 ring-1 ring-gray-200 drop-shadow-md"
              onChange={handleInputChange}
              autoComplete="off"
            />
            <button
              type="submit"
              className="bg-purplePrimary hover:bg-purpleSecondary text-white p-3 font-bold rounded-md"
            >
              {submitting ? "Sending message..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Hire;
