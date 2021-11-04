import React from "react";
import "../css/output.css";

const NonIT = () => {
    return (
        <div class="w-11/12 md:w-5/6 lg:w-4/6 my-5 mr-auto ml-auto lg:mb-20">
           <p class="text-center text-gray-100 text-xl lg:text-3xl mb-5 lg:mb-10 leading-normal font-semibold">
           Non-IT Experience and Education
            </p>
           <div class="p-5
            lg:text-2xl
            rounded-2xl shadow-sm
            bg-white bg-opacity-90
            backdrop-filter backdrop-blur-sm drop-shadow">
                <div class="flex">
                    <p class="font-semibold w-2/5"> 01/2020-04/2021:</p>
                    <p class="w-3/5"> <span class="font-semibold">Junior IT Recruiter </span>- MyNextCompany</p>
                </div>
                <div class="flex">
                    <p class="font-semibold w-2/5"> 2014-2019:</p>
                    <p class="w-3/5"> <span class="font-semibold">Masters in Industrial Psychology </span>- Université Catholique de Louvain (UCLouvain / UCL, Louvain-La-Neuve)</p>
                </div>
                <div class="flex">
                    <p class="w-2/5"> 09/2018-12/2018:</p>
                    <p class="w-3/5"> Psycho-social prevention advice intern - Liantis </p>
                </div>
                <div class="flex">    
                    <p class="w-2/5"> 02/2018-07/2018:</p>
                    <p class="w-3/5"> Internal recruitment intern - Liantis (ADMB)</p>
                </div>
                <br/>
                <div class="flex">
                    <p class="w-2/5"> 2011-2014:</p>
                    <p class="w-3/5"> Bachelor in Law (unfinished) - Université Catholique de Louvain (UCLouvain / UCL, Louvain-La-Neuve) </p>
                </div>
                <div class="flex">    
                    <p class="w-2/5"> 2005-2011:</p>
                    <p class="w-3/5"> High school diploma (Latin/Maths, <span class="font-semibold">English immersion program</span>) - Collège Sainte-Véronique (Liège)</p>
                </div>
            </div>
        </div>
    )
}

export default NonIT ;