import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import {
  NotFoundPage,
  Root,
  MainLayout,
  Home,
  About,
  Contact,
  Donate,
  Gallery,
  HomeLayout
  
} from "./App";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<NotFoundPage />}>
      {/* Pages with header and footer */}
        <Route element={<HomeLayout />}>
          <Route
            index
            element={
                <Home />
            }
        />
      </Route>
      <Route element={<MainLayout />}>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="donate" element={<Donate/>}/>
        <Route path="gallery" element={<Gallery/>}/>
      </Route>
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);