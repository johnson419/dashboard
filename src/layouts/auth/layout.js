import PropTypes from "prop-types";
import NextLink from "next/link";
import dynamic from "next/dynamic";
import { Box, Typography, Unstable_Grid2 as Grid } from "@mui/material";
import { Logo } from "src/components/logo";
import { display } from "@mui/system";

// TODO: Change subtitle text
const DynamicImage = dynamic(() => import("next/image"), { ssr: false });

export const Layout = (props) => {
  const { children } = props;
  const isSmallScreen = typeof window !== "undefined" && window.innerWidth < 960;

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flex: "1 1 auto",
      }}
    >
      <Grid container sx={{ flex: "1 1 auto" }}>
        <Grid
          xs={12}
          lg={6}
          sx={{
            backgroundColor: "background.paper",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <Box
            component="header"
            sx={{
              left: 0,
              p: 3,
              position: "fixed",
              top: 0,
              width: "100%",
            }}
          >
            <Box
              component={NextLink}
              href="/"
              sx={{
                display: "inline-flex",
                height: 32,
                width: 32,
              }}
            >
              
            </Box>
          </Box>
          {children}
        </Grid>
        <Grid
          xs={12}
          lg={6}
          sx={{
            alignItems: "center",
            background: "radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)",
            color: "white",
            display: "flex",
            justifyContent: "center",
            "& img": {
              maxWidth: "100%",
            },
          }}
        >
          <Box sx={{ p: 3 }}>
            <Typography
              align="center"
              color="inherit"
              sx={{
                fontSize: "24px",
                lineHeight: "32px",
                mb: 1,
              }}
              variant="h1"
            >
              Welcome to the{" "}
              <Box component="a" sx={{ color: "#15B79E" }} target="_blank">
                UDSM dashboard
              </Box>
            </Typography>
            <Box
              align="center"
              sx={{
                "& DynamicImage": {
                  maxWidth: "80%",
                  maxHeight: "80%",
                },
              }}
            >
              <DynamicImage alt="" src="/assets/UDSM.png" width={300} height={300} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

Layout.prototypes = {
  children: PropTypes.node,
};
