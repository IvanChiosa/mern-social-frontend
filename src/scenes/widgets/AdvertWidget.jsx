import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://mern-app-backend-4ury.onrender.com/assets/info5.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Ivan&Basil</Typography>
        <Typography color={medium}>www.ivanchiosa.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        It was a pleasure to study at the Digital Career Institute!😄 <br/>
        For the year 2021-2022 🖥️
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
