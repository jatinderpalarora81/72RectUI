import React from "react";
import Carousel from "nuka-carousel";
import { Box, Button, Image } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Slider from 'react-slick';
const HomeCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    };
  return (
      <Box
          position={"relative"}
          height={["relative","relative","700px"]}
          // width={"full"}
          overflow={"hidden"}
      >
          {/* CSS files for react-slick */}
          <link
              rel="stylesheet"
              type="text/css"
              charSet="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        <Slider {...settings}>
            <div>
                <h3>. . .</h3>
                <img src="https://saajdesigns.com/wp-content/uploads/2020/11/i3.jpg"
                     alt="Slide 1" />
            </div>
            <div>
                <h3>. .</h3>
                <img src="https://dv5l4gwa2f8od.cloudfront.net/HomeSlider5.jpg" alt="Slide 2" />
            </div>
            <div>
                <h3>.</h3>
                <img src="https://saajdesigns.com/wp-content/uploads/2020/11/j2.jpg" alt="Slide 3" />
            </div>
        </Slider>
      </Box>
  );

};

export default HomeCarousel;

// <Box
//     position={"relative"}
//     height={["300px","475px","700px"]}
//     width={"full"}
//     overflow={"hidden"}>
//   <Carousel
//     renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
//       <Button
//         borderRadius="none"
//         onClick={previousSlide}
//         disabled={previousDisabled}
//       >
//         <ChevronLeftIcon />
//       </Button>
//     )}
//     renderCenterRightControls={({ nextDisabled, nextSlide }) => (
//       <Button borderRadius="none" onClick={nextSlide} disabled={nextDisabled}>
//         <ChevronRightIcon />
//       </Button>
//     )}
//     slidesToShow={1}
//     cellSpacing={2}
//
//     transitionMode="fade"
//     autoplay
//     autoplayInterval={2000}
//
//   >
//     <Box>
//       <Image
//         w="100%"
//         src="https://saajdesigns.com/wp-content/uploads/2020/11/j2.jpg"
//       />
//     </Box>
//       <Box>
//           <Image
//               w="100%"
//               src="https://dv5l4gwa2f8od.cloudfront.net/HomeSlider5.jpg"
//           />
//       </Box>
//     <Box>
//       <Image
//         w="100%"
//         src="https://saajdesigns.com/wp-content/uploads/2020/11/i3.jpg"
//       />
//     </Box>
//
//   </Carousel>
// </Box>
