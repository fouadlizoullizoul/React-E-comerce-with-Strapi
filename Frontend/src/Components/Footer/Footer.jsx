import { Box, Typography } from "@mui/material"

function Footer() {
  return (
    <Box sx={{bgcolor:"#2b3445",py:1.3,borderTopLeftRadius:8,borderTopRightRadius:8}}>
        <Typography sx={{fontSize:18}}display="flex" justifyContent="center"alignItems="center"color="HighlightText">
            Designed and devleoped by ©2024
        </Typography>
    </Box>
  )
}

export default Footer
