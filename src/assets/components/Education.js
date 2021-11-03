import React from "react";
import "../css/output.css";

const Education = () => {
    return (
        <div class="w-11/12 my-5 mr-auto ml-auto">
           <p class="text-center text-gray-100 text-xl mb-5 leading-normal font-semibold">Education</p>
           <div class="flex-col gap-4 p-8
            rounded-2xl shadow-sm
            bg-white bg-opacity-90
            backdrop-filter backdrop-blur-sm drop-shadow">
                <div class="flex">
                    <p class="w-1/5"> 2021: </p>
                    <p class="w-4/5"> 6 months Web Development Training - Becode (Charleroi)</p>
                </div>
                <div class="flex">
                    <p class="w-1/5"> 2014-2019:</p>
                    <p class="w-4/5"> Masters in Industrial Psychology - Université Catholique de Louvain (UCLouvain / UCL, Louvain-La-Neuve)</p>
                </div>
                <div class="flex">
                    <p class="w-1/5"> 2011-2014:</p>
                    <p class="w-4/5"> Bachelor in Law (unfinished) - Université Catholique de Louvain (UCLouvain / UCL, Louvain-La-Neuve) </p>
                </div>
                <div class="flex">    
                    <p class="w-1/5"> 2005-2011:</p>
                    <p class="w-4/5"> High school diploma (Latin/Maths, English immersion program) - Collège Sainte-Véronique (Liège)</p>
                </div>
            </div>
        </div>
    )
}

export default Education ;