import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./Components/Navbar";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

const Loading = () => <div>Loading...</div>;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <About />
        </Suspense>
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Contact />
        </Suspense>
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;