import { Box, Flex, Grid, Spacer, useMediaQuery } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import Navbar from "../components/Navbar/Navbar";
import ProductDis from "../components/ProductsDisplay/ProductDis";
import FilterData from "../Filter/Filters/FilterData";
import { getSuitsData } from "../redux/PagesReducer/action";

const AllsuitsD = () => {
  const dispatch = useDispatch();
  const suitsD = useSelector((store) => store.pagesReducer.suitsD);
  const loading = useSelector((store) => store.pagesReducer.isLoading);
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  const [searchParams] = useSearchParams();
  const location = useLocation();
  useEffect(() => {
    if (location || suitsD?.length === 0) {
      const sortBy = searchParams.get("sortBy");

      const queryParams = {
        params: {
          category: searchParams.getAll("category"),
          gender: searchParams.getAll("gender"),
          colortype: searchParams.getAll("colortype"),
          sizes: searchParams.getAll("sizes"),
          _sort: sortBy && "rating",
          _order: sortBy,
        },
      };
      dispatch(getSuitsData(queryParams));
    }
  }, [dispatch, location.search, suitsD?.length, searchParams]);
  return (
    <div className="AllwomensD">
      <Navbar /> <br />
      {loading ? (
        <Loading />
      ) : (
        <Flex flexDirection={isLargerThan ? "row" : "column"}>
          <Box w={isLargerThan ? "15%" : "100%"}>
            <FilterData />
          </Box>
          <Spacer />
          <Box width={isLargerThan ? "80%" : "100%"}>
            <Grid
              templateColumns={
                isLargerThan ? "repeat(3, 1fr)" : "repeat(2, 1fr)"
              }
              gap={"5px"}
            >
              {womensD?.length > 0 &&
                womensD.map((item) => {
                  return <ProductDis key={item.key} item={item} />;
                })}
            </Grid>
          </Box>
        </Flex>
      )}
    </div>
  );
};

export default AllsuitsD;
