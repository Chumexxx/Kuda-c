import { BrowserRouter, Route, Routes } from "react-router-dom";
import Personal from "./Pages/Personal";
import Header from "./Static/Header";
import Footer from "./Static/Footer";
import Business from "./Pages/Business";
import Companies from "./Pages/Companies";


const App = () => {
  return(
    <div>

      <BrowserRouter>
        <Header/>
          <Routes>
              <Route path="/" element={<Personal/>} />
              <Route path="/business" element={<Business />} />
              <Route path="/companies" element={<Companies/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    
    </div>
  )
}

export default App;