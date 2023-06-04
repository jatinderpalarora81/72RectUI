import { AiFillHeart } from "react-icons/ai";
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading, VStack, HStack,
  Image, Stack,
  Text,
  useMediaQuery,
  useToast, Radio, RadioGroup,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getData } from "../../redux/DataReducer/action";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { addToCart } from "../../redux/CartReducer/action";
import { addToWishList } from "../../redux/WishReducer/action";
import Navbar from "../Navbar/Navbar";
import RadioGroupBtn from "../RadioBtn/RadioGroupBtn";
import NumberCounter from "../Counter/DaysCounter";
import Cal from "../Calendar/calendar";
import {calculatePrice, calculateDeposit} from "../../utils/util";
// import { BsBagFill } from "react-icons/bs";
const DescriptionPage = () => {
  const { id } = useParams();
  const toast = useToast();
  const products = useSelector((store) => store.dataReducer.products);
  const dispatch = useDispatch();
  const [currentProducts, setCurrentProducts] = useState({});
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  const [size, setSize] = useState(null);
  const [price, setPrice] = useState(0);
  const [deposit, setDeposit] = useState(0);
  const [days, setDays] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  useEffect(() => {
    if (products.length === 0) {
      dispatch(getData());
    }
  }, [dispatch, products.length]);
  useEffect(() => {
    console.log("products")
    console.log(products)
    console.log(id)
    if (id) {
      const cur = products.find((item) => item.id === id);
      console.log('cur :',cur)
      cur && setCurrentProducts(cur);
      cur && setPrice(calculatePrice(cur.base_price, '1'))
      cur && setDeposit(calculateDeposit(cur.base_price))
    }
  }, [id, products]);

  const handleCart = () => {
    let payload = {
      ...currentProducts,
      size,
      price,
      deposit,
      days,
      startDate
    };
    dispatch(addToCart(payload));
  };

  const handleWishList = () => {
    let payload = {
      ...currentProducts,
    };
    dispatch(addToWishList(payload, toast));
  };

  return (
    <div key={currentProducts.id}>
      <Navbar /> <br />
      <Flex
        justify={"space-between"}
        flexDirection={isLargerThan ? "row" : "column"}
      >
        <Box width={["100%", "100%", "40%", "40%"]} min-height={"100vh"}>
          {/* ------------------------------ 1 image------------------------------------ */}
          <Box>
            <Image w={"100%"} src={currentProducts.images?.['front']} />
          </Box>

          {/* ------------------------------ 4 images------------------------------------ */}

          <Box>
            <Flex>
              <Box>
                <Image src={currentProducts.images?.['back']} />
              </Box>
              <Box>
                <Image src={currentProducts.images?.['front']} />
              </Box>
            </Flex>
            <Flex>
              <Box>
                <Image src={currentProducts.images?.['p1']} />
              </Box>
              <Box>
                <Image src={currentProducts.images?.['front']} />
              </Box>
            </Flex>
          </Box>

          {/* --------------------------------------------------------------------- */}
        </Box>

        {/* ------------------------------details Box------------------------------------ */}
        <Box
          width={["100%", "100%", "35%", "35%"]}
          min-height={"100vh"}
          textAlign={"left"}
          my={"6"}
        >
          <Box>
            <Heading>{currentProducts.name}</Heading>
            <Box mx={"3"} my={"3"} fontSize={["sm", "md", "lg", "lg"]}>

              <Text
                  fontSize={["sm", "md", "lg", "lg"]}
                  textAlign="left"
                  fontWeight={"bold"}>
                Rental Charges :
              </Text>
                <Flex gap={"1rem"} my={"2"} mx={"2"} fontSize={["sm", "md", "md", "md"]}>
                    <span
                        style={{
                          color: "#2F4F4F",
                          fontWeight: "bold",
                          marginLeft: "4px",
                        }}
                    >
                      Rent : ₹{price} + Refundable Deposit: ₹{deposit}
                    </span>
                    {/*<span style={{*/}
                    {/*  // fontWeight: "bold",*/}
                    {/*  color: "gray",*/}
                    {/*  marginRight: "1px",}}>*/}
                    {/*  Refundable Deposit: ₹{deposit}*/}
                    {/*</span>*/}

                </Flex>

              {/*<Badge color={"grey"} fontWeight={"bold"} mx={"1"} my={"1"}>*/}
              {/*  incl. of taxes and duties*/}
              {/*</Badge>*/}
            </Box>
            <Box mx={"3"} my={"3"} fontSize={["sm", "md", "lg", "lg"]}>
                <Text
                    fontSize={["sm", "md", "lg", "lg"]}
                    textAlign="left"
                    fontWeight={"bold"}
                >
                  Event Date:
                </Text>
              <Flex gap={"2rem"} my={"1"} mx={["0.5", "1", "2", "4"]}>
                 <span style={{
                   fontWeight: "bold",
                   // color: "gray",
                   marginLeft: "2px"}}>
                     <Cal startDate={start => setStartDate(start)}/>
                    </span>

                <span style={{
                  fontWeight: "bold",
                  // color: "gray",
                  marginRight: "2px"}}>
                     <NumberCounter setCount={(v)=> {setPrice(calculatePrice(currentProducts.base_price, v)); setDays(v)}} />
                </span>

              </Flex>
            </Box>

            <Box mx={"3"} my={"3"} fontSize={["sm", "md", "lg", "lg"]}>
              <Text
                fontSize={["sm", "md", "lg", "lg"]}
                textAlign="left"
                fontWeight={"bold"}
              >
                Select Size
              </Text>
              <Flex gap={"2rem"} my={"2"} mx={"2"}>
                <RadioGroup onChange={ v => {setSize(v)}} value={size}>
                  <HStack>
                      {currentProducts.sizes?.map((size) => (
                          <Radio value={size}>{size}</Radio>
                        // <Button
                        //   key={size}
                        //   _hover={{
                        //     border: "1px solid black",
                        //     bg: "none",
                        //     color: "blue",
                        //
                        //   }}
                        //   onClick={() => setSize(size)}
                        // >
                        //   {size}
                        // </Button>
                      ))}
                  </HStack>
                </RadioGroup>
              </Flex>
            </Box>

            <Box mt="3rem" align={"left"}>
              <Button
                width={["100%", "100%", "70%", "70%"]}
                bg="black"
                color={"whitesmoke"}
                colorScheme={"blackAlpha"}
                disabled={!size}
                onClick={handleCart}
              >
                {!size ? "Please Select A Size" : "ADD TO BAG"}
              </Button>
            </Box>
            <Box mt="1rem" align={"left"}>
              <Button
                width={["100%", "100%", "70%", "70%"]}
                bg="white"
                border={"1px solid black"}
                color="black"
                onClick={handleWishList}
              >
                ADD TO FAVOURITE <AiFillHeart color="red" size={"20px"} />
              </Button>
            </Box>
          </Box>
          <hr />
          {/* ------------------------------details Box End------------------------------------ */}

          {/* ------------------------------description Box------------------------------------ */}
          <Box mt={"5rem"} align={"left"} mx={"4"}>
            <Badge ml="1" fontSize="1rem" colorScheme="blackAlpha">
              Description :
            </Badge>

            <UnorderedList spacing={"3"} my={"4"}>
              <ListItem fontSize={"md"} fontWeight={"semibold"}>
                Detail : {currentProducts.description}{" "}
              </ListItem>
              <ListItem fontSize={"md"} fontWeight={"semibold"}>
                Colour : {currentProducts.color}{" "}
              </ListItem>
              <ListItem fontSize={"md"} fontWeight={"semibold"}>
                Rating : {currentProducts.rating}{" "}
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export default DescriptionPage;
