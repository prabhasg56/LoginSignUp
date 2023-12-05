import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// import logo from '../assets/heart.png';
// import downArrow from '../assets/downArrow.svg';
// import Modal from './Modal';

// const NavBar = () => {
//     const [showDropdown, setShowDropdown] = useState(false);
//     const [showModal, setShowModal] = useState(false);

//     const handleDropDown = () => {
//         const isOpen = showDropdown ? false : true;
//         setShowDropdown(isOpen);
//     }

//     return (
//         <>
//             <div className='flex h-16 sm:h-8 w-[100%] bg-blue-600 space-x-96 '>
//                 <img className="p-2 cursor-pointer" src={logo} alt="" />
//                 <div className='p-2 mt-3 flex'>
//                     <input placeholder='Search...' type='text' className='h-7 p-2' />
//                     <img src={downArrow} alt='' className='bg-white h-7 cursor-pointer' />
//                 </div>
//                 <div className='mt-4'>
//                     <ul className='flex space-x-4 text-white font-bold'>
//                         <li className='cursor-pointer'><NavLink to='/about'>About</NavLink></li>
//                         <li className='cursor-pointer'><NavLink to='/contact'>Contact</NavLink></li>
//                         <div>
//                             <li className='cursor-pointer' onClick={() => handleDropDown()}>Profile</li>
//                             {showDropdown && <div className="z-10  bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
//                                 <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">

//                                     <li>
//                                         <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer" onClick={() => setShowModal(true)}>LogIn</a>
//                                         <Modal showModal={showModal} closeModal={setShowModal}>
//                                             <div className='flex flex-col text-black justify-center items-center'>
//                                                 <h4 className='font-bold text-xl'>LogIn</h4>
//                                                 <form className='flex flex-col'>
//                                                     <div className='flex flex-row space-x-4 my-6 text-[16px] justify-center items-center'>
//                                                         <label>User Name</label>
//                                                         <input placeholder='Please enter email' type='email' className='h-8' required />
//                                                     </div>

//                                                     <div className='flex flex-row space-x-4 my-6 text-[16px] justify-center items-center'>
//                                                         <label>Password</label>
//                                                         <input placeholder='Please enter email' type='password' className='h-8' required />
//                                                     </div>

//                                                     <div className=' flex space-x-4 justify-center items-center'>
//                                                         <button className='bg-green-800 text-white p-2 rounded'>Submit</button>
//                                                         <button className='bg-red-800 text-white p-2 rounded'>Cancel</button>
//                                                     </div>
//                                                 </form>


//                                             </div>
//                                         </Modal>
//                                     </li>
//                                     <li>
//                                         <NavLink to='/login' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">LogOut</NavLink>
//                                     </li>
//                                 </ul>
//                             </div>}
//                         </div>
//                     </ul>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default NavBar;
