import { useTheme } from "@emotion/react";
import { AddShoppingCartOutlined, Close } from "@mui/icons-material";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ProductDetails from "./ProductDetails";
import { useGetproductByNameQuery } from "../../Redux/Product";

const Main = () => {
  const allProductsAPI = "products?populate=*";
  const menCategoryAPI =
    "products?populate=*&filters[productCategory][$eq]=men";
  const womenCategoryAPI =
    "products?populate=*&filters[productCategory][$eq]=women";
  const [myData, setData] = useState(allProductsAPI);
  const { data, error, isLoading } = useGetproductByNameQuery(myData);
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAlignment = (event, newAlignment) => {
    setData(newAlignment);
  };

  if (data) {
    console.log(data);
  }
  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }
  if (error) {
    return <Typography>Error: {error.message}</Typography>;
  }

  if (data) {
    return (
      <Container sx={{ py: 9 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap={3}
          flexWrap="wrap"
        >
          <Box>
            <Typography variant="h6">Selected Products</Typography>
            <Typography fontWeight={300} variant="boday1">
              All Our New Arrivals In A Exclusive Brand Selection
            </Typography>
          </Box>
          <ToggleButtonGroup
            color="error"
            value={myData}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ".Mui-selected": {
                border: "1px solid rgba(233,69,96,0.5) !important",
                color: "#e94560",
                backgroundColor: "initial",
              },
            }}
          >
            <ToggleButton
              onClick={() => setData(allProductsAPI)}
              sx={{ color: theme.palette.text.primary }}
              className="Mybutton"
              value={allProductsAPI}
              aria-label="left aligned"
            >
              All Products
            </ToggleButton>
            <ToggleButton
              onClick={() => setData(menCategoryAPI)}
              sx={{ mx: "15px !important", color: theme.palette.text.primary }}
              className="Mybutton"
              value={menCategoryAPI}
              aria-label="centered"
            >
              MEN category
            </ToggleButton>
            <ToggleButton
              onClick={() => setData(womenCategoryAPI)}
              sx={{ color: theme.palette.text.primary }}
              className="Mybutton"
              value={womenCategoryAPI}
              aria-label="right aligned"
            >
              Women category
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent={"space-between"}
          flexWrap="wrap"
        >
          {data.data.map((item) => {
            return (
              <Card
                key={item}
                sx={{
                  maxWidth: 333,
                  mt: 6,
                  ":hover .MuiCardMedia-root": {
                    rotate: "1deg",
                    scale: "1.1",
                    transition: "0.4s",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: 277 }}
                  image={`${
                    item.attributes.productimg.data[0].attributes.url
                  }`}
                  title="green iguana"
                />
                <CardContent>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography gutterBottom variant="h6" component="div">
                      {item.attributes.productTitle}
                    </Typography>
                    <Typography variant="subtitle1" component="p">
                      ${item.attributes.productPrice}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    {item.attributes.productDescription}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    onClick={handleClickOpen}
                    size="large"
                    sx={{ textTransform: "capitalize" }}
                  >
                    <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
                    Add to Cart
                  </Button>
                  <Rating
                    name="read-only"
                    value={item.attributes.productRating}
                    precision={0.5}
                    readOnly
                  />
                </CardActions>
              </Card>
            );
          })}
        </Stack>
        <Dialog
          sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            sx={{
              "&:hover": { color: "red", rotate: "180deg", transition: "0.3s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
          <ProductDetails />
        </Dialog>
      </Container>
    );
  }
};

export default Main;
