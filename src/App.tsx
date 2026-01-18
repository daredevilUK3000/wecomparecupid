import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Compare from "./pages/Compare";
import Quiz from "./pages/Quiz";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const App = () => (
<HashRouter>
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/compare" element={<Compare />} />
    <Route path="/quiz" element={<Quiz />} />
    <Route path="/reviews" element={<Reviews />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/help" element={<Help />} />
    <Route path="/privacy" element={<Privacy />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</HashRouter>
);

export default App;
