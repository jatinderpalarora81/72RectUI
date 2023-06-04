import {
    Box, Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader, Container,
    Flex,
    Heading,
    HStack,
    Icon,
    Image,
    SimpleGrid,
    Text
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SimpleGridComp = ({ item }) => {
    const navigate = useNavigate();
    // const {id, name, color, gender, images, final_price, reviews, rating} =
    //     item;
    // const [img, setImg] = useState(images['front']);
    // const handleDes = () => {
    //     navigate(`/description/${id}`);
    // };
    // const ChangeHoverImage = () => {
    //     setImg(images['back']);
    // };
    // const OriginalImage = () => {
    //     setImg(images['front']);
    // };

    return (
        <Box>
            <Text fontSize='4xl' >How Rental Works</Text>
        <SimpleGrid spacing={6} columns={[2,2,4]}>
            <Card>
                <Image
                    // src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    src='https://dv5l4gwa2f8od.cloudfront.net/Hanger.png'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                     objectFit='contain'
                    // align={"right top"}
                    // justifyContent="center"

                />
                <CardHeader>
                    <Heading size='md'> Select a Style</Heading>
                </CardHeader>
                <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    {/*<Button>View here</Button>*/}
                </CardFooter>
            </Card>
            <Card>
                <Image
                    // src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    src='https://dv5l4gwa2f8od.cloudfront.net/book-your-outfit.png'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    objectFit='contain'
                />
                <CardHeader>
                    <Heading size='md'> Book your Outfit</Heading>
                </CardHeader>
                <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    {/*<Button>View here</Button>*/}
                </CardFooter>
            </Card>
            <Card>
                <Image
                    // src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    src='https://dv5l4gwa2f8od.cloudfront.net/flaunt-it.png'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    objectFit='contain'
                />
                <CardHeader>
                    <Heading size='md'> Flaunt It</Heading>
                </CardHeader>
                <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    {/*<Button>View here</Button>*/}
                </CardFooter>
            </Card>
            <Card>
                <Image
                    // src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    src='https://dv5l4gwa2f8od.cloudfront.net/Pickup.png'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    objectFit='contain'
                />
                <CardHeader>
                    <Heading size='md'> Return It</Heading>
                </CardHeader>
                <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    {/*<Button>View here</Button>*/}
                </CardFooter>
            </Card>
        </SimpleGrid>
        </Box>
    )
}
    export default SimpleGridComp;