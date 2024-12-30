// import React from 'react'

import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <main className="w-full h-[100vh] bg-red-300">
          {/*Add header or navbar here */}
          
        <div className="h-full w-full pb-[2rem]">
            <Outlet />
          </div>
          {/*Add footer here */}

    </main>
  )
}
