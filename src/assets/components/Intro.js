import React from "react";
import "../css/output.css";

const Intro = () => {
    return (
        <div class="flex justify-center items-center h-3/5 w-screen">
            <div class="rounded-full m-5">
                <img src="https://github.com/FrankZiWANG-dev/Portfolio" alt="photo-cv"/>
            </div>
            <div class="text-center 
            bg-gradient-to-tr from-gray-200 via-gray-400 to-gray-600
            rounded-x1 p-5 m-5">
            <p class="italic">"Well done is better than well said", Benjamin Franklin.</p>
            </div>
        </div>
    )
}

export default Intro;