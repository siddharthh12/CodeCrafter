import React, { useEffect, useState } from 'react';
import logo from '../images/logo1.png';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineLightMode } from 'react-icons/md';
import { IoGrid } from 'react-icons/io5';
import { api_base_url, toggleClass } from '../helper';

const Navbar = ({ isGridLayout, setIsGridLayout }) => {
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(api_base_url + '/getUserDetails', {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: localStorage.getItem('userId'),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setData(data.user);
        } else {
          setError(data.message);
        }
      });
  }, []);

  const logout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');
    window.location.reload();
  };

  return (
    <>
      <div className="navbar flex items-center justify-between px-[100px] h-[80px] bg-[#4169E1]">
        <div className="logo">
          <img
            className="w-[150px] cursor-pointer"
            src={logo}
            alt="Logo"
            onClick={() => navigate('/')} // Navigate to home page
          />
        </div>

        <div className="links flex items-center gap-4">
          {/* Home link redirects to home */}
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <button
            onClick={logout}
            className="btnBlue !bg-white-500 min-w-[120px] ml-2 hover:!bg-red-600"
          >
            Logout
          </button>

          <div className="navbar">
            {/* Dynamically show user name or avatar */}
            <div
              onClick={() => {
                toggleClass('.dropDownNavbar', 'hidden');
              }}
              className="w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-[#0D8ABC] text-white font-bold"
            >
              {data ? data.name.charAt(0).toUpperCase() : '?'}
            </div>
          </div>
        </div>
        <div className="dropDownNavbar hidden absolute right-[60px] top-[80px] shadow-lg shadow-black/50 p-[10px] rounded-lg bg-[#1A1919] w-[150px] h-[160px]">
          <div className="py-[10px] border-b-[1px] border-b-[#fff]">
            <h3 className="text-[17px]" style={{ lineHeight: 1 }}>
              {data ? data.name : ''}
            </h3>
          </div>
          
          <i
            onClick={() => setIsGridLayout(!isGridLayout)}
            className="flex items-center gap-2 mt-3 mb-2 cursor-pointer"
            style={{ fontStyle: 'normal' }}
          >
            <IoGrid className="text-[20px]" /> Grid Layout
          </i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
