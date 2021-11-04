import React from "react";
import "../css/output.css";

const Intro = () => {
    return (
        <div style={{backgroundImage: "url('https://github.com/FrankZiWANG-dev/Portfolio/blob/main/src/assets/images/background.jpg?raw=true')"}}
        class="w-screen p-5 lg:mb-20
        flex justify-center items-center
        bg-fixed bg-cover">
            <div class="flex
            rounded-2xl shadow-sm
            bg-white bg-opacity-40
            backdrop-filter backdrop-blur-sm drop-shadow">
                <div style={{backgroundImage: "url('https://github.com/FrankZiWANG-dev/Portfolio/blob/main/src/assets/images/Photo%20CV.jpg?raw=true')"}}
                class="m-3 w-full h-48 self-center md:m-5 md:w-60 lg:w-36
                bg-cover bg-center md:bg-contain
                rounded-full border-2 border-yellow-400">
                </div>
                <div class="self-center lg:text-2xl
                flex flex-col
                p-5 ml-1 mr-5">
                    <p class="font-semibold"> Hi! I'm Frank! </p>
                    <p>I'm an industrial psychology major turned web developer.</p>
                    <p>I'm looking for a 3-months internship to explore my interest in the MERN stack, Python, Agile and CI/CD.</p>
                </div>
            </div>
        </div>
    )
}

export default Intro;