import React from "react";
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const CheckOutPage = ({
  cart,
  show_price,
  discount_price,
  link,
  title,
  coupon,
  total_price,
  discount,
  quantity,
  total_deposit
}) => {
  const navigate = useNavigate();
  return (
    <Box w="100%" m="auto">
      <Stack>
        <Button
          border={"3px solid beige"}
          bg={"black"}
          color={"white"}
          fontWeight={"bold"}
          colorScheme={"none"}
          p="1.5rem"
          _hover={{ bg: "none", color: "teal" }}
          onClick={() => navigate(link)}
        >
          {title}
        </Button>
      </Stack>

      <Stack spacing={5} my={"7"} border="3px solid beige">
        <Heading size={"md"} align={"left"} mx={"2"}>
          ORDER SUMMARY
        </Heading>
        <Flex lineHeight={"10"}>
          <Box align={"left"} mx={"2"} my={"4"}>
            <Text>RENT COST</Text>
            {/*<Text>{cart.length} ITEMS</Text>*/}
            <Text>QUANTITY</Text>
            <Text>REFUNDABLE DEPOSIT</Text>
            <Text>DELIVERY</Text>
            <Text>TOTAL PAYABLE</Text>
            <Badge colorScheme="red">( inclusive to all taxes )</Badge>
          </Box>
          <Box mx={"2"} my={"4"}>
            <Text color="grey">
              ₹{show_price}.00
            </Text>
            {/*<Text>₹{discount_price}.00</Text>*/}
            <Text>{quantity}</Text>
            <Text>₹{total_deposit}.00</Text>
            <Text>FREE</Text>
            <Text>₹{total_price}.00</Text>
          </Box>
        </Flex>
      </Stack>
      <Stack my={"2"}>{coupon}</Stack>
    </Box>
  );
};

export default CheckOutPage;
