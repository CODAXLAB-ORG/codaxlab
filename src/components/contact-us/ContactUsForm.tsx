import React from 'react'

const ContactUsForm = () => {
  return (
    <div className="space-y-6">
          <h1 className="text-center mb-4 text-4xl font-semibold">
            We'd Love to Hear From Your!
          </h1>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label className="text-left" htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                placeholder="Enter your name"
                className="bg-gray-900 p-2 rounded-md"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-left" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="bg-gray-900 p-2 rounded-md"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-left" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                placeholder="Enter subject"
                className="bg-gray-900 p-2 rounded-md"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-left" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                className="min-h-[150px] bg-gray-900 p-2 rounded-md"
              />
            </div>
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-md">
            Send Message
          </button>
        </div>
  )
}

export default ContactUsForm
