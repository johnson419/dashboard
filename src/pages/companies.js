import Head from "next/head";
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { OverviewBudget } from "src/sections/overview/overview-budget";
import { OverviewSales } from "src/sections/overview/overview-sales";
import { OverviewTasksProgress } from "src/sections/overview/overview-tasks-progress";
import { OverviewTotalCustomers } from "src/sections/overview/overview-total-customers";
import { OverviewTotalProfit } from "src/sections/overview/overview-total-profit";

import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { CompaniesSearch } from "src/sections/companies/companies-search";
import LockClosedIcon from "@heroicons/react/24/solid/LockClosedIcon";

const Page = () => (
  <>
    <Head>
      <title>Companies</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <Stack direction="row" justifyContent="space-between" spacing={4}>
            <Stack spacing={1}>
              <Typography variant="h4">Companies</Typography>
              <Stack alignItems="center" direction="row" spacing={1}>
                <Button
                  color="inherit"
                  startIcon={
                    <SvgIcon fontSize="small">
                      <ArrowUpOnSquareIcon />
                    </SvgIcon>
                  }
                >
                  Login to your account
                </Button>
                <Button
                  color="inherit"
                  startIcon={
                    <SvgIcon fontSize="small">
                      <LockClosedIcon />
                    </SvgIcon>
                  }
                >
                  Register your company
                </Button>
              </Stack>
            </Stack>
            <div>
              <Button
                startIcon={
                  <SvgIcon fontSize="small">
                    <PlusIcon />
                  </SvgIcon>
                }
                variant="contained"
              >
                Add
              </Button>
            </div>
          </Stack>
          <CompaniesSearch />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              py: 8,
            }}
          >
            <Container maxWidth="xl">
              <Grid container spacing={3}>
                <Grid xs={12} sm={6} lg={3}>
                  <OverviewBudget difference={12} positive sx={{ height: "100%" }} value="$24k" />
                </Grid>
                <Grid xs={12} sm={6} lg={3}>
                  <OverviewTotalCustomers
                    difference={16}
                    positive={false}
                    sx={{ height: "100%" }}
                    value="1.6k"
                  />
                </Grid>
                <Grid xs={12} sm={6} lg={3}>
                  <OverviewTasksProgress sx={{ height: "100%" }} value={75.5} />
                </Grid>
                <Grid xs={12} sm={6} lg={3}>
                  <OverviewTotalProfit sx={{ height: "100%" }} value="$15k" />
                </Grid>
                <Grid xs={12} lg={8}>
                  <OverviewSales
                    chartSeries={[
                      {
                        name: "This year",
                        data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20],
                      },
                      {
                        name: "Last year",
                        data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13],
                      },
                    ]}
                    sx={{ height: "100%" }}
                  />
                </Grid>

                <Grid xs={12} md={6} lg={4}></Grid>
                <Grid xs={12} md={12} lg={8}></Grid>
              </Grid>
            </Container>
          </Box>
        </Stack>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
