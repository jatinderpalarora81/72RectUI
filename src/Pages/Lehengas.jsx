import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FilterData from "../Filter/Filters/FilterData";
import { getLehengaData } from "../redux/PagesReducer/action";
import { Flex, Box, Spacer, Grid, useMediaQuery } from "@chakra-ui/react";
import ProductDis from "../components/ProductsDisplay/ProductDis";
import Loading from "../components/Loading/Loading";
import { useLocation, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const AllLehengaD = () => {
  const dispatch = useDispatch();
  const lehengasD = useSelector((store) => store.pagesReducer.lehengasD);
  const loading = useSelector((store) => store.pagesReducer.isLoading);
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  const [searchParams] = useSearchParams();
  const location = useLocation();
  useEffect(() => {
    if (location || lehengasD?.length === 0) {
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
      dispatch(getLehengaData(queryParams));
    }
  }, [dispatch, location.search, lehengasD?.length, searchParams]);
  return (
    <div className="AllmensD">
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
              {lehengasD?.length > 0 &&
                  lehengasD.map((item) => {
                  return <ProductDis key={item.key} item={item} />;
                })}
            </Grid>
          </Box>
        </Flex>
      )}
    </div>
  );
};

export default AllLehengaD;
