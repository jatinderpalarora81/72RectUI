import {Box, Heading, VStack} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { getLehengaData } from "../../redux/PagesReducer/action";
import { HomeDis } from "../HomeDisplay/HomeDisplay";
const Trending = () => {
  const dispatch = useDispatch();
  const lehengasD = useSelector((store) => store.pagesReducer.lehengasD);

  useEffect(() => {
    if (lehengasD?.length === 0) {
      dispatch(getLehengaData());
    }
  }, [dispatch, lehengasD?.length]);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <Box border="1px solid beige">
        <Heading align={"left"}> TOP PICKS FOR YOU</Heading>
        <Slider {...settings}>
          {lehengasD?.length > 0 &&
              lehengasD.map((item) => {
              return <HomeDis key={item.key} item={item} />;
            })}
        </Slider>
      </Box>
    </div>
  );
};

export default Trending;
