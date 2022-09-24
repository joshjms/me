import "./App.css";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";

import { Avatar } from "@mui/material";

import AOS from "aos";
import "aos/dist/aos.css";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function App() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <Nav />
            <div className="profile w-[80%] mx-auto my-[15vh] gap-10 flex gap-10 flex-wrap">
                <div className="profile-avatar inline-block">
                    <Avatar
                        alt="Joshua James"
                        src="amongus.png"
                        sx={{ width: 300, height: 300 }}
                        className="border-2"
                    />
                    <h3 className="text-4xl mt-5"> @joshjms </h3>
                    <h5 className="text-md mt-2 text-gray-600">
                        A.K.A. JOSHUA JAMES
                    </h5>
                    <p>Surabaya, Indonesia - Singapore, Singapore</p>
                    <p>Nanyang Technological University 2022-2026</p>
                </div>
                <div className="profile-avatar inline-block ml-5">
                    <h1 className="text-8xl font-bold mt-5"> Hello, World! </h1>
                    <h3 className="text-4xl mt-3">
                        I code, I sleep, and I code again.
                    </h3>

                    <div className="social mt-10 gap-10 flex">
                        <div data-aos="flip-right" className="inline-block">
                            <p
                                className="text-6xl lg:text-8xl hover:text-8xl lg:hover:text-9xl hover:text-pink-600 ease-in-out duration-300"
                            >
                                <a
                                    href="https://instagram.com/joshjms16/"
                                    target="_blank"
                                >
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
                            </p>
                        </div>
                        <div data-aos="flip-right" className="inline-block">
                            <p 
                                className="text-6xl lg:text-8xl hover:text-8xl lg:hover:text-9xl hover:text-blue-600 ease-in-out duration-300"
                            >
                                <a
                                    href="https://www.linkedin.com/in/joshua-james-20074222a/"
                                    target="_blank"
                                >
                                    <i class="fa-brands fa-linkedin"></i>
                                </a>
                            </p>
                        </div>
                        <div data-aos="flip-right" className="inline-block">
                            <p 
                                className="text-6xl lg:text-8xl hover:text-8xl lg:hover:text-9xl hover:text-yellow-400 ease-in-out duration-300"
                            >
                                <a
                                    href="mailto:joshjms1607@gmail.com"
                                    target="_blank"
                                >
                                    <i class="fa-solid fa-envelope"></i>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
