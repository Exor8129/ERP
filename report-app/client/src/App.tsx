// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout"; // Assuming Layout is in components folder
import Sales from "./pages/Sales/Sales";
// Import other pages

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Layout wraps all routes, ensuring sidenavi appears on every page */}
        <Route path="/" element={<Layout />}>
          {/* Place child routes within Layout */}
          <Route path="sales" element={<Sales />} />
          {/* Add other routes here, like "dashboard", "quotations", etc. */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
