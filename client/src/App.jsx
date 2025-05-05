import { Navbar, Welcome, Footer, Services,Login, Signup} from "./components";
import { Route, Routes } from "react-router-dom";

// import Home from "./pages/Home";

function App() {
  return (
    <div className="">
     <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="gradient-bg-welcome">
                
                <Welcome />
              </div>
              <div className="min-h-screen">
                
                <Services />
                {/* <Transactions /> */}
                <Footer />
              </div>
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
