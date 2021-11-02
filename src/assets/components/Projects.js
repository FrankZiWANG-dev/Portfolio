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
        <div class="text-center w-screen">
           <p class="text-gray-100 text-xl leading-normal font-semibold"> Projects </p>
           <Slider {...settings}>
               <div class="bg-gray-400 rounded-3xl flex flex-col justify-center">
                    <a href="http://www.github.com/" target="_blank"
                    class="w-1/5 h-1/5"
                    style={{backgroundImage: "url('https://github.com/FrankZiWANG-dev/Portfolio/blob/main/src/assets/images/Photo%20CV.jpg?raw=true')"}}>
                        <div> Text <br/>Text <br/>Text <br/>Text <br/></div>
                    </a>
                </div>
                <div>
                    <a href="http://www.github.com/" target="_blank">
                        <img src="https://github.com/FrankZiWANG-dev/Portfolio/blob/main/src/assets/images/Photo%20CV.jpg?raw=true"/>
                        <div> Text </div>
                    </a>
                </div>
                <div>
                    <a href="http://www.github.com/" target="_blank">
                        <img src="https://github.com/FrankZiWANG-dev/Portfolio/blob/main/src/assets/images/Photo%20CV.jpg?raw=true"/>
                        <div> Text </div>
                    </a>
                </div>
                <div>
                    <a href="http://www.github.com/" target="_blank">
                        <img src="https://github.com/FrankZiWANG-dev/Portfolio/blob/main/src/assets/images/Photo%20CV.jpg?raw=true"/>
                        <div> Text </div>
                    </a>
                </div>
            </Slider>
        </div>
    )
}

export default Projects ;