import React from 'react';
import logo from '../images/logo1.png';
import { FiDownload } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';

const EditorNavbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="EditorNavbar flex items-center justify-between px-[100px] h-[80px] bg-[#4169E1]">
        {/* Left: Logo */}
        <div className="logo">
          <img
            onClick={() => navigate('/')}
            className="w-[150px] cursor-pointer"
            src={logo}
            alt="Logo"
          />
        </div>

        {/* Center: Project Info */}
        <div className="project-info">
          <p>
            File / <span className="text-[#373737]">My First Project</span>
          </p>
        </div>

        {/* Right: Links and Download */}
        <div className="flex items-center gap-6">
          {/* Links */}
          <div className="links flex items-center gap-6 text-white">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* Download Button */}
          <i className="p-[8px] btn bg-black rounded-[5px] cursor-pointer text-[20px] text-white">
            <FiDownload />
          </i>
        </div>
      </div>
    </>
  );
};

export default EditorNavbar;
