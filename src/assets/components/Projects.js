import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/output.css";

const Projects = () => {
    var settings = {
        infinite: true,
        lazyLoad: 'ondemand',
    };

    return (
        <div class="w-4/5 ml-auto mr-auto flex-col items-center lg:mb-20">
           <p class="text-center text-gray-100 text-xl lg:text-3xl lg:mb-5 leading-normal font-semibold">
               Projects
            </p>
           <Slider {...settings}>
                <div class="rounded-3xl flex items-center justify-center">
                    <a class='rounded' href="https://github.com/FrankZiWANG-dev/Guinea-pig-presidentials" target="_blank">
                        <figure class="relative">
                            <img class="pl-3 pr-3 pt-5 md:pl-8 md:pr-8" src='https://github.com/FrankZiWANG-dev/Portfolio/blob/main/src/assets/images/Guinea-pig-presidentials-screenshot.png?raw=true'/>
                            <figcaption class=" mt-5 mr-5 ml-5 p-3 text-sm 
                                        md:absolute md:-mt-36 md:right-0 md:mr-12 md:p-5 md:text-xl
                                        lg:text-2xl lg:right-8 lg:-mt-44
                                        rounded-xl shadow-sm
                                        bg-white bg-opacity-90
                                        md:bg-opacity-40 md:backdrop-filter md:backdrop-blur-sm md:drop-shadow">
                                <p class="font-semibold md:text-lg lg:text-3xl">Guinea pig presidentials</p>
                                <p> Meet my guinea pigs and elect your favorite!</p>
                                <p> Frontend in HTML / Sass, Backend in PHP. </p>
                            </figcaption>
                        </figure>
                    </a>
                </div>
                <div class="rounded-3xl flex items-center justify-center">
                    <a class='rounded' href="https://github.com/FrankZiWANG-dev/Guinea-pig-presidentials" target="_blank">
                        <figure class="relative">
                            <img class="pl-3 pr-3 pt-5 md:pl-8 md:pr-8" src='https://github.com/FrankZiWANG-dev/Portfolio/blob/main/src/assets/images/Guinea-pig-presidentials-screenshot.png?raw=true'/>
                            <figcaption class=" mt-5 mr-5 ml-5 p-3 text-sm
                                        md:absolute md:-mt-32 md:right-0 md:mr-12 md:p-5
                                        rounded-xl shadow-sm
                                        bg-white bg-opacity-90
                                        md:bg-opacity-40 md:backdrop-filter md:backdrop-blur-sm md:drop-shadow">
                                <p class="font-semibold md:text-lg">Gaming-themed Cookie Clicker</p>
                                <p> Click the icon to get points, spend to get bonuses. Repeat.</p>
                                <p> Frontend in HTML / Sass / Javascript. No backend. </p>
                            </figcaption>
                        </figure>
                    </a>
                </div>
                <div class="rounded-3xl flex items-center justify-center">
                    <a class='rounded' href="https://github.com/FrankZiWANG-dev/Guinea-pig-presidentials" target="_blank">
                        <figure class="relative">
                            <img class="pl-3 pr-3 pt-5 md:pl-8 md:pr-8" src='https://github.com/FrankZiWANG-dev/Portfolio/blob/main/src/assets/images/Guinea-pig-presidentials-screenshot.png?raw=true'/>
                            <figcaption class=" mt-5 mr-5 ml-5 p-3 text-sm
                                        md:absolute md:-mt-32 md:right-0 md:mr-12 md:p-5
                                        rounded-xl shadow-sm
                                        bg-white bg-opacity-90
                                        md:bg-opacity-40 md:backdrop-filter md:backdrop-blur-sm md:drop-shadow">
                                <p class="font-semibold md:text-lg">Pet Database</p>
                                <p> My most ambitious project: a pet related social network!</p>
                                <p> Frontend in React / Tailwind / Sass, Backend in NodeJS / MongoDB. </p>
                            </figcaption>
                        </figure>
                    </a>
                </div>
                <div class="rounded-3xl flex items-center justify-center">
                    <a class='rounded' href="https://github.com/FrankZiWANG-dev/Guinea-pig-presidentials" target="_blank">
                        <figure class="relative">
                            <img class="pl-3 pr-3 pt-5 md:pl-8 md:pr-8" src='https://github.com/FrankZiWANG-dev/Portfolio/blob/main/src/assets/images/Guinea-pig-presidentials-screenshot.png?raw=true'/>
                            <figcaption class=" mt-5 mr-5 ml-5 p-3 text-sm
                                        md:absolute md:-mt-32 md:right-0 md:mr-12 md:p-5
                                        rounded-xl shadow-sm
                                        bg-white bg-opacity-90
                                        md:bg-opacity-40 md:backdrop-filter md:backdrop-blur-sm md:drop-shadow">
                                <p class="font-semibold md:text-lg">Client project for Becode</p>
                                <p> Becode needed a platform to centralize client projects done by their students.</p>
                                <p> Technologies to be determined yet. </p>
                            </figcaption>
                        </figure>
                    </a>
                </div>
            </Slider>
        </div>
    )
}

export default Projects ;