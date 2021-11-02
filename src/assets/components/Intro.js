import React from "react";
import "../css/output.css";

const Intro = () => {
    return (
        <div class="flex justify-center items-center h-3/5 w-screen m-5">
            <div class="ml-5 mr-3">
                <img class="rounded-full border-2 border-gray-400" src="https://github.com/FrankZiWANG-dev/Portfolio/blob/main/src/assets/images/Photo%20CV.jpg?raw=true" alt="photo-cv"/>
            </div>
            <div class="text-justify 
            bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800
            rounded-2xl shadow-sm
            p-5 ml-3 mr-5">
                <div class="rounded-xl w-3/5 bg-gray-100 bg-opacity-70 text-gray-800">
                    <p class="italic text-left">"Well done is better than well said" </p>
                    <p class="italic text-right"> Benjamin Franklin.</p>
                </div>
            
                <p> Welcome to my online CV! </p>
                <p> Take a look at my academic background, technological preferences, projects and interests.
                    Feel free to fill out the form at the bottom of the page to share your opinion or a professional opportunity.</p>
            </div>
        </div>
    )
}

export default Intro;