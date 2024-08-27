import { useTheme } from "@emotion/react";
import {
  AccessAlarmOutlined,
  CreditScoreOutlined,
  ElectricBoltOutlined,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import { Box, Container, Divider, Stack, Typography, useMediaQuery } from "@mui/material";

const Banner = () => {
    const theme=useTheme()
  return (
    <Container sx={{mt:3,bgcolor:theme.palette.primary.contrastText}}>
      <Stack divider={useMediaQuery('(min-width:700px)') ?<Divider orientation="vertical" flexItem/> :null} flexWrap="wrap"  direction="row" alignItems="center" >
        <MyBox
          icon={<ElectricBoltOutlined fontSize="large" />}
          title="Fast Delivery"
          subTitle="Start from $10"
        />
        <MyBox
          icon={<WorkspacePremiumOutlined fontSize="large" />}
          subTitle="7 Days Back"
          title="Money Guarantee"
        />
        <MyBox
          icon={<AccessAlarmOutlined fontSize="large" />}
          title="365 Days"
          subTitle="For free return"
        />
        <MyBox
          icon={<CreditScoreOutlined fontSize="large" />}
          title="Payment"
          subTitle="Secure system"
        />
      </Stack>
    </Container>
  );
};

export default Banner;

// eslint-disable-next-line react/prop-types
const MyBox = ({ icon, title, subTitle }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
        gap: 3,
        py: 1.8,
        justifyContent:useMediaQuery('(min-width:600px)')?"center" : "start"
      }}
    >
      {icon}
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
          variant="subtitle1"
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};
