import React from "react";
import "../css/output.css";

const Intro = () => {
    return (
        <div style={{backgroundImage: "url('https://github.com/FrankZiWANG-dev/Portfolio/blob/main/src/assets/images/desk.jpg?raw=true')"}}
        class="h-4/6 w-screen p-5
        flex justify-center items-center
        bg-fixed bg-cover">
            <div class="flex
            rounded-2xl shadow-sm
            bg-white bg-opacity-40
            backdrop-filter backdrop-blur-sm drop-shadow">
                <div style={{backgroundImage: "url('https://github.com/FrankZiWANG-dev/Portfolio/blob/main/src/assets/images/Photo%20CV.jpg?raw=true')"}}
                class="ml-3 w-full h-48 self-center
                bg-cover bg-center
                rounded-full border-2 border-yellow-400">
                </div>
                <div class="self-center
                flex flex-col
                p-5 ml-1 mr-5">
                    {/* <div class="self-end rounded-xl w-3/5 bg-gray-100 bg-opacity-70 p-2">
                        <p class="italic text-left">"Well done is better than well said" </p>
                        <p class="italic text-right"> Benjamin Franklin.</p>
                    </div> */}
                
                    <p class="font-semibold"> Welcome to my online CV! </p>
                    <p> Take a look at my academic background, technological preferences, projects and interests.</p>
                    <p>Feel free to fill out the form at the bottom of the page to share your opinion or a professional opportunity.</p>
                </div>
            </div>
        </div>
    )
}

export default Intro;