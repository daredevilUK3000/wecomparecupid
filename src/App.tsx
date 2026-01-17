import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Compare from "./pages/Compare";
import Quiz from "./pages/Quiz";
import Reviews from "./pages/Reviews";
import NotFound from "./pages/NotFound";

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </HashRouter>
);

export default App;
