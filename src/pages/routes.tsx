import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import PrimaryLayout from "../layouts/primary-layout";
import About from "./about";
import SearchPage from "./search";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <PrimaryLayout>
          <Outlet />
        </PrimaryLayout>
      }
      errorElement={<p>404 error page.</p>}
    >
      <Route index path="/" element={<SearchPage />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
);
