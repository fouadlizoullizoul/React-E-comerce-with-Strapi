/* eslint-disable react/no-unescaped-entities */
import { AddShoppingCartOutlined } from "@mui/icons-material"
import { Box, Button, Stack, Typography } from "@mui/material"

function ProductDetails() {
  return (
    <Box sx={{display:"flex",alignItems:"center" ,gap:2.5,flexDirection:{xs:"column",md:"row"}}} py={3}>
        <Box sx={{display:"flex"}} >
            <img  height={300} src="src\assets\banner-16.jpg" alt="" width={300}/>
        </Box>
        <Box  sx={{textAlign:{xs:"center",sm:"left"}}}>
            <Typography variant="h5">WOMEN'S FASHION</Typography>
            <Typography my={0.4} fontSize={'22px'} color={"crimson"} variant="h5">$120.00</Typography>
            <Typography variant="body1">
                    Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Laudantium ducimus perspiciatis
                    fuga dolores nobis dolorem eveniet repellat, aperiam quos vel alias doloribus, molestiae quis quo, illo id vitae sed ab?
            </Typography>
            <Stack sx={{justifyContent:{xs:"center",sm:"left"}}} direction={"row"} gap={1} my={2}>
                {["src/assets/banner-16.jpg","src/assets/banner-16.jpg"].map((item)=>{
                     return (
                        <img key={item} style={{borderRadius:3}} src={item} alt="" height={100} width={90} />
                    )
                })}
            </Stack>
            <Button sx={{textTransform:"capitalize"}} variant="contained">
                <AddShoppingCartOutlined fontSize="small" sx={{mr:1}}/>
                Buy now
            </Button>
        </Box>
    </Box>
  )
}

export default ProductDetails
