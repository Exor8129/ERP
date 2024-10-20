// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout"; // Assuming Layout is in components folder
import Sales from "./pages/Sales/Sales";
import Purchase from "./pages/Purchase/Purchase";
import Accounts from "./pages/Accounts/Accounts";
import Complaints from "./pages/Complaints/Complaints";
// Import other pages

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="sales" element={<Sales />} />
          <Route path="purchase" element={<Purchase />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="complaints" element={<Complaints />} />
          {/* <Route path="settings" element={<SettingsPage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
