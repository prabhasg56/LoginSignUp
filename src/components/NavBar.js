import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


import logo from '../assets/heart.png';
import downArrow from '../assets/downArrow.svg'
import Modal from "./Modal";


export default function Navbar() {
    const [toggle, setToggle] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleDropDown = () => {
        const isOpen = showDropdown ? false : true;
        setShowDropdown(isOpen);
    }

    const showNav = () => {
        setToggle(!toggle);
    };

    return (
        <nav className=" h-18 top-0 w-full bg-blue-600 text-white items-center flex p-4">
            <div className="flex justify-between items-center w-full flex-wrap md:flex-nowrap">
                <img className="cursor-pointer w-8" src={logo} alt="" />
                <div className='flex'>
                    <input placeholder='Search...' type='text' className='h-7 p-2 text-black' />
                    <img src={downArrow} alt='' className='bg-white h-7 cursor-pointer' />
                </div>
                <button
                    className="flex justify-end md:hidden rounded"
                    onClick={showNav}
                >
                    <FontAwesomeIcon icon={faBars} className=" text-white w-9 h-9 flex justify-center items-center hover:text-black" />

                </button>

                <ul
                    className={`${toggle ? " flex" : " hidden"
                        } flex-col justify-center items-center w-full first:mt-2 md:flex-row md:w-auto md:space-x-10 md:flex`}
                >
                    <li className='font-medium w-full flex justify-center p-2 mt-3 md:border-none md:p-0 md:mt-0 md:w-auto cursor:pointer'><NavLink to='/about'>About</NavLink></li>
                    <li className='font-medium w-full flex justify-center p-2.5  md:border-none md:p-0 md:mt-0 md:w-auto cursor:pointer'><NavLink to='/contact'>Contact</NavLink></li>
                    <div>
                        <li className=' font-medium w-full flex justify-center p-2.5 md:border-none md:p-0 md:w-auto cursor:pointer' onClick={() => handleDropDown()}>Profile</li>
                        {showDropdown && <div className="z-10  bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">

                                <li>
                                    <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer" onClick={() => setShowModal(true)}>LogIn</a>
                                    <Modal showModal={showModal} closeModal={setShowModal}>
                                        <div className='flex flex-col text-black justify-center items-center'>
                                            <h4 className='font-bold text-xl'>LogIn</h4>
                                            <form className='flex flex-col'>
                                                <div className='flex flex-row space-x-4 my-6 text-[16px] justify-center items-center'>
                                                    <label>User Name</label>
                                                    <input placeholder='Please enter email' type='email' className='h-8' required />
                                                </div>

                                                <div className='flex flex-row space-x-4 my-6 text-[16px] justify-center items-center'>
                                                    <label>Password</label>
                                                    <input placeholder='Please enter email' type='password' className='h-8' required />
                                                </div>

                                                <div className=' flex space-x-4 justify-center items-center'>
                                                    <button className='bg-green-800 text-white p-2 rounded'>Submit</button>
                                                    <button className='bg-red-800 text-white p-2 rounded'>Cancel</button>
                                                </div>
                                            </form>


                                        </div>
                                    </Modal>
                                </li>
                                <li>
                                    <NavLink to='/logout' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor:pointer">LogOut</NavLink>
                                </li>
                            </ul>
                        </div>}
                    </div>
                </ul>
            </div>
        </nav>
    );
}
