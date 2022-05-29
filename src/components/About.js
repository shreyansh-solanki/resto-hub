import React from 'react';
import Avatar from '../img/avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const About = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center ">
            <div className='w-[90%] md:wd-[80%] h-full flex flex-col items-center justify-center'>
                <h1 className='font-semibold text-[2.5rem] mb-5 text-orange-600 md:text-[3rem] '>About Us</h1>
                <p className='font-semibold text-xl text-gray-600 xl:text-3xl md:2xl tracking-wide'>
                RestoHub will provide and encourage gap between Restaurants in a public forum, allowing you to get instant feedback/reply from the concerned Restaurant. Because the communication on RestoHub will be open for everyone else to follow, it will encourage openness and accountability in service.
                </p>
            </div>
            {/* our colaborators */}
            


            <h2 className='font-semibold text-[2.5rem] mb-5 text-orange-600 mt-5 md:text-[3rem]'>Our Team</h2>
            <div className='grid md:grid-cols-2 md:gap-10 gap-5 grid-cols-1 lg:grid-cols-3 '>
                <div className="img-container flex justify-center items-center">
                    <div className="container mx-auto max-w-sm rounded-lg overflow-hidden shadow-lg my-2 bg-white">
                        <div className="relative z-10 flex justify-center items-center flex-col mt-2" >
                            <img className="w-[250px] mx-10 my-10 rounded-[20px]" src={Avatar}
                                alt="Profile image" />
                            <div className="text-center relative w-full">
                                <p className="text-white tracking-wide uppercase text-lg font-bold">Ram Pratap</p>
                                <p className="text-gray-400 text-sm">ram.singh_cs19@gla.ac.in</p>
                            </div>
                        </div>
                        
                        <div className="pt-5 pb-8 text-gray-600 text-center">
                            <p>Ram Pratap Singh</p>
                            <p className="text-sm">Project Leader</p>
                        </div>
                    </div>
                </div>
                <div className=" flex justify-center items-center">
                    <div className="container mx-auto max-w-sm rounded-lg overflow-hidden shadow-lg my-2 bg-white">
                        <div className="relative z-10 flex justify-center items-center flex-col mt-2" >
                            <img className="w-[250px] mx-10 my-10 rounded-[20px]" src={Avatar}
                                alt="Profile image" />
                            <div className="text-center relative w-full">
                                <p className="text-white tracking-wide uppercase text-lg font-bold">Chetan Verma</p>
                                <p className="text-gray-400 text-sm">chetan.verma_cs19@gla.ac.in</p>
                            </div>
                        </div>
                        
                        <div className="pt-5 pb-8 text-gray-600 text-center">
                            <p>Chetan Verma</p>
                            <p className="text-sm">Project Member</p>
                        </div>
                    </div>
                </div>
                <div className=" flex justify-center items-center">
                    <div className="container mx-auto max-w-sm rounded-lg overflow-hidden shadow-lg my-2 bg-white">
                        <div className="relative z-10 flex justify-center items-center flex-col mt-2" >
                            <img className="w-[250px] mx-10 my-10 rounded-[20px]" src={Avatar}
                                alt="Profile image" />
                            <div className="text-center relative w-full">
                                <p className="text-white tracking-wide uppercase text-lg font-bold">Shreyansh</p>
                                <p className="text-gray-400 text-sm">shreyansh_cs19@gla.ac.in</p>
                            </div>
                        </div>
                        
                        <div className="pt-5 pb-8 text-gray-600 text-center">
                            <p>Shreyansh</p>
                            <p className="text-sm">Project Member</p>
                        </div>
                    </div>
                </div>
                <div className=" flex justify-center items-center">
                    <div className="container mx-auto max-w-sm rounded-lg overflow-hidden shadow-lg my-2 bg-white">
                        <div className="relative z-10 flex justify-center items-center flex-col mt-2" >
                            <img className="w-[250px] mx-10 my-10 rounded-[20px]" src={Avatar}
                                alt="Profile image" />
                            <div className="text-center relative w-full">
                                <p className="text-white tracking-wide uppercase text-lg font-bold">Vishnu Pandey</p>
                                <p className="text-gray-400 text-sm">vishnu.pandey_cs19@gla.ac.in</p>
                            </div>
                        </div>
                        
                        <div className="pt-5 pb-8 text-gray-600 text-center">
                            <p>Vishnu Pandey</p>
                            <p className="text-sm">Project Member</p>
                        </div>
                    </div>
                </div>
                <div className=" flex justify-center items-center">
                    <div className="container mx-auto max-w-sm rounded-lg overflow-hidden shadow-lg my-2 bg-white">
                        <div className="relative z-10 flex justify-center items-center flex-col mt-2" >
                            <img className="w-[250px] mx-10 my-10 rounded-[20px]" src={Avatar}
                                alt="Profile image" />
                            <div className="text-center relative w-full">
                                <p className="text-white tracking-wide uppercase text-lg font-bold">John Doe</p>
                                <p className="text-gray-400 text-sm">vivek.badhauria_cs19@gla.ac.in</p>
                            </div>
                        </div>
                        
                        <div className="pt-5 pb-8 text-gray-600 text-center">
                            <p>Vivek Bhadhauria</p>
                            <p className="text-sm">Project Member</p>
                        </div>
                    </div>
                </div>

                
            </div>
            
        </div>
    );
};

export default About;
