import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoute";
import User from "./pages/User";

import Home from "./pages/Home";
import Loading from "./components/Loading";
import { Suspense } from "react";
import { useUserContext } from "./context/UserContext";
function App() {
  const { isLoading } = useUserContext();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route
              path="/app"
              element={
                <PrivateRoute>
                  <User />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
