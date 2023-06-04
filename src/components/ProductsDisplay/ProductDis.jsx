import { Box, Flex, HStack, Icon, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { AiOutlineStar } from "react-icons/ai";
import { StarIcon } from "@chakra-ui/icons";

const ProductDis = ({ item }) => {
  const navigate = useNavigate();
  // const { id, name, color, gender, images, final_price, reviews, rating } =
  const {id, name,description,color,base_price,rating,reviews,sizes,images } =
    item;
  const [img, setImg] = useState(images['front']);
  const handleDes = () => {
    navigate(`/description/${id}`);
  };
  const ChangeHoverImage = () => {
    setImg(images['back']);
  };
  const OriginalImage = () => {
    setImg(images['front']);
  };

  return (
    <div>
      <Box
        key={id}
        width={"95%"}
        m="auto"
        onMouseEnter={ChangeHoverImage}
        onMouseLeave={OriginalImage}
        onClick={handleDes}
        my={"3"}
      >
        <Box overflow={"hidden"} position={"relative"} >
          <Image className="imageAnimation" src={img} alt={name}
                 objectFit='cover'
                  boxSize='md'
          />
        </Box>
        <Box
          textAlign={"left"}
          color={"darkgrey"}
          fontSize={["xs", "sm", "md", "md"]}
        >
          <Text>{name}</Text>
          <Text>{description}</Text>
          <Text>{color}</Text>
        </Box>
        <Flex
          justify={"left"}
          gap={"2rem"}
          fontWeight={"medium"}
          align={"center"}
        >
          <Text as={Flex} alignItems={"center"}  fontSize={["xs", "sm", "md", "md"]}>
            <Icon as={StarIcon} color="yellow.500" /> : {rating}
          </Text>
          <Text fontSize={["xs", "sm", "md", "md"]}>Review : ({reviews}) </Text>
        </Flex>
        <HStack justify={"left"}>
          <Text fontWeight={"semibold"} fontSize={["sm", "md", "lg", "xl"]}>
            ₹{base_price}.00
          </Text>
        </HStack>
      </Box>
    </div>
  );
};

export default ProductDis;
