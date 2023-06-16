import React from "react";
import Carousel from "nuka-carousel";
import { Box, Button, Image } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
const HomeCarousel = () => {
  return (
      <Box
          position={"relative"}
          height={["375px","475px","700px"]}
          width={"full"}
          overflow={"hidden"}>
    <Carousel
      renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
        <Button
          borderRadius="none"
          onClick={previousSlide}
          disabled={previousDisabled}
        >
          <ChevronLeftIcon />
        </Button>
      )}
      renderCenterRightControls={({ nextDisabled, nextSlide }) => (
        <Button borderRadius="none" onClick={nextSlide} disabled={nextDisabled}>
          <ChevronRightIcon />
        </Button>
      )}
    >
      <Box>
        <Image
          w="100%"
          src="https://saajdesigns.com/wp-content/uploads/2020/11/j2.jpg"
        />
      </Box>
        <Box>
            <Image
                w="100%"
                src="https://dv5l4gwa2f8od.cloudfront.net/HomeSlider5.jpg"
            />
        </Box>
      <Box>
        <Image
          w="100%"
          src="https://saajdesigns.com/wp-content/uploads/2020/11/i3.jpg"
        />
      </Box>

    </Carousel>
      </Box>
  );

};

export default HomeCarousel;
