import{BrowserRouter, Routes, Route} from "react-router-dom";
import Accueil from "./pages/Accueil";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Notfound from "./pages/Notfound";
import Navbar from "./composant/Navbar";
import Competence from "./pages/Competence";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
     
    <Navbar />

     <Routes>
       <Route path="/" element={<Accueil/>}>Pages Accueil</Route>
       <Route path="/competence" element={<Competence/>}>Compétence</Route>
       <Route path="/about" element={<About/>}>À propos</Route>
       <Route path="/contact" element={<Contact/>}>Pages de contact</Route>
       <Route path="/admin" element={<Admin/>}>Pages Administrateur</Route>
       <Route path="*" element={<Notfound/>}>Page Introuvable</Route>
     
     </Routes>
    
     
   
   </BrowserRouter>
  );
}

export default App;
