import "./App.css";
import Header from "./layout/Header";
import Main from "./layout/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyProfile from "./pages/MyProfile";
import Help from "./pages/Help";
import SideBar from "./components/categories/SideBar";
import Category from "./components/categories/Category";
import {BlogProvider} from "./context/BlogContext";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
      <BlogProvider>
        <BrowserRouter>
          <Header />
          <SideBar  />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<MyProfile />} />
            <Route path="/help" element={<Help />} />
            <Route path="/:idCategory" element={<Category />} />
          </Routes>
        </BrowserRouter>
        </BlogProvider>
      </div>
    </div>
  );
}

export default App;
