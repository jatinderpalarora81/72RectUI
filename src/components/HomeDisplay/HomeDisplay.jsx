import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const HomeDis = ({ item }) => {
  const navigate = useNavigate();
  const { id, name, color, gender, images } = item;

  const [img, setImg] = useState(images['front']);
  const [fname, setFname] = useState("normal");

  const ChangeHoverImage = () => {
    setImg(images['back']);
    setFname("bold");
  };
  const OriginalImage = () => {
    setImg(images['front']);
    setFname("normal");
  };

  return (
    <div key={id} onMouseEnter={ChangeHoverImage} onMouseLeave={OriginalImage}>
      <Box
        width={["85%", "80%", "80%", "80%"]}
        onClick={() => navigate("/allproducts")}
      >
        <Box overflow={"hidden"} position={"relative"}>
          <Image className="imageAnimation" src={img} alt={name} />
        </Box>
        <Text fontWeight={fname}>{name}</Text>
        {/*<Text>*/}
        {/*  {color} || {gender}*/}
        {/*</Text>*/}
      </Box>
    </div>
  );
};

// const handleDes = () => {
//   navigate(`/description/${id}`);
// };
