import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../components/Carousel/Carousel";
import CheckOutPage from "../components/checkout/CheckOutPage";
import Empty from "../components/Empty/EmptyFunction";
import Navbar from "../components/Navbar/Navbar";
import Trending from "../components/Trends/Trending";
import { decQty, incQty, removeItem } from "../redux/CartReducer/action";
import {dateFormat} from "../utils/util";

const Cart = () => {
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  const cart = useSelector((store) => store.cart.cart);
  const dispatch = useDispatch();

  const handleIncrement = (id, size) => {
    dispatch(incQty({ id, size }));
  };
  const handleDecrement = (id, size, qty) => {
    if (qty > 1) {
      dispatch(decQty({ id, size }));
    } else {
      dispatch(removeItem({ id, size }));
    }
  };

  //   ---------------Up have a decreament and increament quantity logic----------------Total Price Logic--------------------------------------------
  const convertStringIntoNumber = (str) => {

    if (Number(str)) {
      return Number(str);
    }
    let arr = str.includes(",") ? str.split(",") : [];
    let converting_string = arr.reduce((a, c) => a + c, "");
    let result = Number(converting_string);
    return result;
  };
  let show_price = 0;
  let deposit_price = 0;
  let quantity = 0;
  let total_price = 0;
  cart.forEach((item) => {
    show_price += convertStringIntoNumber(item.price) * item.qty;
    deposit_price += convertStringIntoNumber(item.deposit) * item.qty;
    quantity += item.qty;
  });
  total_price = show_price + deposit_price;

  // =================================Upper have logic of discount=======================================================================
  console.log('cart', cart);
  console.log(  'deposit_price: ', deposit_price);
  return (
    <>
     <Navbar/> <br/>
      {cart.length === 0 ? (
        <Empty />
      ) : (
        <div>
          <Box align="left" width={["95%", "90%", "80%", "85%"]} m="auto">
        
            <Heading my={"2"}>YOUR BAG</Heading>
            <Text my={"2"}>TOTAL Items : {cart.length} items</Text>
            <Text my={"2"}>
              Items in your bag are not reserved — check out now to make them
              yours.
            </Text>
          </Box>
          {/* -------------------------------UP HeadLines-------------------------------------------------------- */}
          <Flex
            width={["100%", "100%", "90%", "90%"]}
            m="auto"
            justifyContent={"space-between"}
            flexDirection={isLargerThan ? "row" : "column"}
          >
            <Box width={["95%", "90%", "50%", "60%"]} m="auto">
              {cart?.length > 0 &&
                cart.map((item) => (
                  <Flex
                    border="3px solid beige"
                    m="auto"
                    my={"4"}
                    flexDirection={isLargerThan ? "row" : "column"}
                  >
                    <Box height={"50%"} width={["100%", "100%", "40%", "30%"]}>
                      <Image w="100%" src={item.images['front']} alt="try" />
                    </Box>
                    {/* -----------------------------------UP Image---------- Down description--------------------------------------------------------------------- */}
                    <Box
                      width={["95%", "90%", "60%", "60%"]}
                      align={"left"}
                      mx={"4"}
                      my={"6"}
                    >
                      <Flex justifyContent={"space-between"}>
                        <Text>{item.name} </Text>
                        <Box>
                          <Text  color="red" fontWeight={"bold"}>
                            ₹{item.price}
                          </Text>
                          <Text>Refundable Deposit: ₹{item.deposit} </Text>
                          <Text>Booking Date: {item.startDate.toDateString()} </Text>
                          <Text>Duration: {item.days} days</Text>
                        </Box>
                      </Flex>
                      <Text my={"2"}>{item.color} </Text>
                      <Text> SIZE : {item.size} </Text>
                      <Flex my={"4"} alignItems={"center"} gap="1rem">
                        <Button
                          bg="black"
                          colorScheme={"teal"}
                          p="0"
                          borderRadius={"50%"}
                          border={"1px solid black"}
                          disabled={item.qty === 0}
                          onClick={() =>
                            handleDecrement(item.id, item.size, item.qty)
                          }
                        >
                          <MinusIcon fontSize={"10"} />
                        </Button>
                        <Text>{item.qty}</Text>
                        <Button
                          colorScheme={"teal"}
                          p="0"
                          bg="black"
                          borderRadius={"50%"}
                          disabled="true"
                          border={"1px solid black"}
                          onClick={() => handleIncrement(item.id, item.size)}
                        >
                          <AddIcon fontSize={"10"} />
                        </Button>
                      </Flex>
                    </Box>
                  </Flex>
                ))}
            </Box>
            {/* ------------------------------up fetching cart and down checkout---------------------------------------- */}
            <Box width={["95%", "90%", "40%", "35%"]}>
              <CheckOutPage
                title={"CHECKOUT"}
                cart={cart}
                show_price={show_price}
                total_deposit={deposit_price}
                link={"/checkout"}
                quantity={quantity}
                total_price={total_price}
              />
            </Box>
          </Flex>
        
        </div>
      )}
      <Box my={"5rem"}>
        <Box display={"none"}>
          <Carousel />
        </Box>
        <Box>
          <Trending />
        </Box>
      </Box>
    </>
  );
};

export default Cart;
