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
        <div class="w-4/5 ml-auto mr-auto flex-col items-center ">
           <p class="text-center text-gray-100 text-xl leading-normal font-semibold"> Projects </p>
           <Slider {...settings}>
                <div class="rounded-3xl flex items-center justify-center">
                    <a class='rounded' href="https://github.com/FrankZiWANG-dev/Guinea-pig-presidentials" target="_blank">
                        <figure class="relative">
                            <img class="pl-8 pt-5 pr-8" src='https://github.com/FrankZiWANG-dev/Portfolio/blob/main/src/assets/images/Guinea-pig-presidentials-screenshot.png?raw=true'/>
                            <figcaption class="absolute -mt-32 right-0 mr-12 p-5
                                        rounded-xl shadow-sm
                                        bg-white bg-opacity-40
                                        backdrop-filter backdrop-blur-sm drop-shadow">
                                <p class="font-semibold text-lg">Guinea pig presidentials</p>
                                <p> Meet my guinea pigs and elect your favorite!</p>
                                <p> Frontend in HTML / Sass, Backend in PHP. </p>
                            </figcaption>
                        </figure>
                    </a>
                </div>
                <div class="rounded-3xl flex items-center justify-center">
                    <a class='rounded' href="https://github.com/FrankZiWANG-dev/Guinea-pig-presidentials" target="_blank">
                        <figure class="relative">
                            <img class="pl-8 pt-5 pr-8" src='https://github.com/FrankZiWANG-dev/Portfolio/blob/main/src/assets/images/Guinea-pig-presidentials-screenshot.png?raw=true'/>
                            <figcaption class="absolute -mt-32 right-0 mr-12 p-5
                                        rounded-xl shadow-sm
                                        bg-white bg-opacity-40
                                        backdrop-filter backdrop-blur-sm drop-shadow">
                                <p class="font-semibold text-lg">Gaming-themed Cookie Clicker</p>
                                <p> Click the icon to get points, spend to get bonuses. Repeat.</p>
                                <p> Frontend in HTML / Sass / Javascript. No backend. </p>
                            </figcaption>
                        </figure>
                    </a>
                </div>
                <div class="rounded-3xl flex items-center justify-center">
                    <a class='rounded' href="https://github.com/FrankZiWANG-dev/Guinea-pig-presidentials" target="_blank">
                        <figure class="relative">
                            <img class="pl-8 pt-5 pr-8" src='https://github.com/FrankZiWANG-dev/Portfolio/blob/main/src/assets/images/Guinea-pig-presidentials-screenshot.png?raw=true'/>
                            <figcaption class="absolute -mt-32 right-0 mr-12 p-5
                                        rounded-xl shadow-sm
                                        bg-white bg-opacity-40
                                        backdrop-filter backdrop-blur-sm drop-shadow">
                                <p class="font-semibold text-lg">Pet Database</p>
                                <p> My most ambitious project: a pet related social network!</p>
                                <p> Frontend in React / Tailwind / Sass, Backend in NodeJS / MongoDB. </p>
                            </figcaption>
                        </figure>
                    </a>
                </div>
                <div class="rounded-3xl flex items-center justify-center">
                    <a class='rounded' href="https://github.com/FrankZiWANG-dev/Guinea-pig-presidentials" target="_blank">
                        <figure class="relative">
                            <img class="pl-8 pt-5 pr-8" src='https://github.com/FrankZiWANG-dev/Portfolio/blob/main/src/assets/images/Guinea-pig-presidentials-screenshot.png?raw=true'/>
                            <figcaption class="absolute -mt-32 right-0 mr-12 p-5
                                        rounded-xl shadow-sm
                                        bg-white bg-opacity-40
                                        backdrop-filter backdrop-blur-sm drop-shadow">
                                <p class="font-semibold text-lg">Client project for Becode</p>
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