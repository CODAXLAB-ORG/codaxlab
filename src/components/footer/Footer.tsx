// import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full flex flex-col justify-center gap-5 px-4 lg:px-10 bg-black bg-opacity-30 backdrop-blur-md bottom-0">
          <div className="w-full h-auto flex flex-col md:flex-row md:justify-between py-5 gap-4">
              <div className="bg-yellow-600 w-full">hello 1</div>
              <div className="w-full md:max-w-[20rem] bg-blue-300">hello2</div>
          </div>
          <div className="divider w-full h-[2px] bg-gray-400"></div>
          <div>hello socials</div>
    </footer>
  )
}
