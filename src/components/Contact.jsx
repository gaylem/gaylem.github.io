import React from 'react'
import Title from './Title'

function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex items-center justify-center">
        <form
          action={import.meta.env.VITE_ENDPOINT}
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            type="text"
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md dark:text-black text-white dark:bg-orange-300 bg-violet-600  drop-shadow-md hover:bg-opacity-75 dark:hover:bg-orange-200 hover:stroke-white"
          >
            Work With Me
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
