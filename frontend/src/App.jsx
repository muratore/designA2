import { Route, Routes } from "react-router-dom";
// importar o authenticate do useAuth

// Importação das páginas
import Nav from "./components/Nav";
import Sobre from "./pages/Sobre";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
import Message from "./components/layout/Message";

// importação do AdmContext que vai dar acesso a aplicação

import AddJob from "./pages/dashboard/AddJob";
import EditJob from "./pages/dashboard/EditJob";
import MyJobs from "./pages/dashboard/MyJobs";
import Contact from "./pages/Contact";
import JobDetails from "./pages/JobDetails";
import JobForm from "./components/form/JobForm";


function App() {
 
  return (
    <div className="flex flex-1 flex-col h-dvh min-h-full bg-zinc-950">
      {/* Navegacao */}
      <Nav />
      <Message />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/myjobs" element={<MyJobs />} />
        <Route path="/dashboard/edit/:id" element={<EditJob />} />
        <Route path="/dashboard/add" element={<AddJob />} />
        <Route path="/test" element={<JobForm />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
