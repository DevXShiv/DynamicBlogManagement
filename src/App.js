import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import AuthorDashboard from "./pages/AuthorDashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import AddBlog from "./pages/AddBlog";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        <Route path="/author" element={<AuthorDashboard />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/settings" element={<Settings />} />

        <Route path="/add-blog" element={<AddBlog />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;