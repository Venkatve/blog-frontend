import { useContext } from 'react'

import { Link } from "react-router-dom";


import { Context } from "../context/Context"




const Navbar = () => {

    const { user, dispatch } = useContext(Context);
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };


    return (
        <div className="bg-blue-800 text-white">
            <div>
                <div className=' flex justify-center'>
                    <h1 className=' p-2  font-radio md:text-5xl animate-flip '>Blogger</h1>
                </div>

                <div className='flex justify-evenly '>
                    <ul className='flex justify-items-end space-x-8 py-5 animate-fadeInLeft'>
                        <Link to="/">  <li className="rounded-full px-4 py-2  bg-blue-700  hover:bg-blue-700   flex  text-justify hover:ring-4 ring-white transition ease-in-out duration-100">

                            HOME
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                        </li></Link>
                        <Link to="/write"> <li className="rounded-full px-4 py-2  bg-blue-700  hover:bg-blue-700   flex  text-justify hover:ring-4 ring-white transition ease-in-out duration-100">
                            
                                NEW POST
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                        </li></Link> 

                        {/* {
                            <li className="rounded-full px-4 py-2  bg-blue-700  hover:bg-blue-700   flex  text-justify hover:ring-4 ring-white transition ease-in-out duration-100" onClick={logoutHandler}>
                                {userInfo && "LOGOUT"}
                            </li>
                        } */}


                        {
                            user ? (
                                <ul className="flex flex-row  justify-end  space-x-9  ">

                                    {/* <li>   <Link className="link" to="/settings">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                                        </svg>
                                    </Link></li> */}



                                    <li className="rounded-full px-4 py-2  bg-blue-700  hover:bg-blue-700   flex  text-justify hover:ring-4 ring-white transition ease-in-out duration-100" onClick={handleLogout}>
                                        {user && "LOGOUT"}
                                    </li>

                                    <li className='p-2 text-xl text-justify rounded-full  hover:ring-4 ring-white transition ease-in-out duration-100'>
                                        Welcome {user.username}
                                    </li>
                                </ul>




                            ) : (
                                <ul className="flex flex-row  justify-center  space-x-9">
                                  <Link to="/login">    <li className="rounded-full px-4 py-2  bg-blue-700  hover:bg-blue-700   flex  text-justify hover:ring-4 ring-white transition ease-in-out duration-100">
                                      
                                            LOGIN
                                         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                        </svg>
                                    </li ></Link>
                                    <Link to="/register">  <li className="rounded-full px-4 py-2  bg-blue-700  hover:bg-blue-700   flex  text-justify hover:ring-4 ring-white transition ease-in-out duration-100">
                                       
                                            REGISTER
                                       <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                                        </svg>
                                    </li> </Link> 

                                </ul>
                            )
                        }
                    </ul>
                </div>
            </div>









        </div>



    )
}



export default Navbar;
















// {
//     <ul className="   flex flex-row  justify-center  space-x-9">
//         <li className="rounded-full px-4 py-2  bg-blue-700  hover:bg-blue-700   flex  text-justify hover:ring-4 ring-white transition ease-in-out duration-100">
//             <Link to="/">
//                 HOME
//             </Link>   <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                 <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
//             </svg>
//         </li>
//         <li className="rounded-full px-4 py-2  bg-blue-700  hover:bg-blue-700   flex  text-justify hover:ring-4 ring-white transition ease-in-out duration-100">
//             <Link to="/write">
//                 NEW POST
//             </Link>   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//                 <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
//             </svg>
//         </li>
//         <li className="rounded-full px-4 py-2  bg-blue-700  hover:bg-blue-700   flex  text-justify hover:ring-4 ring-white transition ease-in-out duration-100" onClick={logoutHandler}>
//             {`${userInfo.name}` && "LOGOUT"}
//         </li>
//         <div>
//             {`${userInfo.name}` ? (
//                 <Link className="link" to="/settings">
//                     <img className="topImage" src='https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png' alt="" />
//                 </Link>
//             ) : (
//                 <ul className="flex flex-row  justify-center  space-x-9">
//                     <li className="rounded-full px-4 py-2  bg-blue-700  hover:bg-blue-700   flex  text-justify hover:ring-4 ring-white transition ease-in-out duration-100">
//                         <Link to="/login">
//                             LOGIN
//                         </Link> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//                             <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
//                         </svg>
//                     </li >
//                     <li className="rounded-full px-4 py-2  bg-blue-700  hover:bg-blue-700   flex  text-justify hover:ring-4 ring-white transition ease-in-out duration-100">
//                         <Link to="/register">
//                             REGISTER
//                         </Link> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                             <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
//                         </svg>
//                     </li>
//                 </ul>
//             )}
//         </div>

//     </ul>
// }









