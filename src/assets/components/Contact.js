import React from "react";
import "../css/output.css";

const Contact = () => {
    return (
        <div class="text-center w-screen pb-10 lg:pb-20">
           <p class="text-gray-100 text-xl lg:text-3xl leading-normal mb-5 lg:mb-10 font-semibold">
               Contact
            </p>
            <div  class="p-5 w-3/5 lg:w-1/2 mr-auto ml-auto
            rounded-2xl shadow-sm
            bg-white bg-opacity-90
            backdrop-filter backdrop-blur-sm drop-shadow">
                <p class="font-semibold text-xl lg:text-3xl pb-3 lg:pb-5">Let's have a chat!</p>
                <div class="flex gap-2 lg:gap-10 justify-center">
                    <a href="https://www.linkedin.com/in/frank-zi-wang/" target="_blank">
                        <img class="w-12 h-12 lg:w-24 lg:h-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
                    </a>
                    <a href="mailto:wang.frank.zi@gmail.com">
                        <img class="w-12 h-12 lg:w-24 lg:h-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" />
                    </a>
                    <a href="https://github.com/FrankZiWANG-dev/" target="_blank">
                        <img class="w-12 h-12 lg:w-24 lg:h-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;