import React from "react";
import "../css/output.css";

const IT = () => {
    return (
        <div class="w-11/12 md:w-5/6 lg:w-4/6 my-5 mr-auto ml-auto lg:text-xl lg:mb-20">
           <p class="text-center text-gray-100 text-xl lg:text-3xl lg:mb-10 mb-5 leading-normal font-semibold">
               IT Experience and Education
            </p>
           <div class="flex-col gap-4 p-8
            lg:text-2xl
            rounded-2xl shadow-sm
            bg-white bg-opacity-90
            backdrop-filter backdrop-blur-sm drop-shadow">
                <div class="flex">
                    <p class="font-semibold w-2/5">10/2021: </p>
                    <p class="w-3/5"><span class="font-semibold">Participation as Project Manager </span>- Citizens of Wallonia Hackathon <br/> (2 wins and 4 nominations out of 10 prizes)</p>
                </div>
                <div class="flex">
                    <p class="font-semibold w-2/5">05/2021-12/2021: </p>
                    <p class="w-3/5">
                        <span class="font-semibold">Fast-track Web Development Training </span>- Becode (Charleroi): <br/>
                        Active self-reliant learning of full stack responsive web design, including solo, group and client projects (techs and links below).                    </p>
                </div>
            </div>
        </div>
    )
}

export default IT ;