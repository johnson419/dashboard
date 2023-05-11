import Head from 'next/head';
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { StudentRequest } from 'src/sections/request/request-form';

const Page = () => (
  <>
    <Head>
      <title>
        Apply for PT Students
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <div>
            <Typography variant="h4">
              Apply for Practical Training Students
            </Typography>
          </div>
          <div>
            <Grid
              container
              spacing={5}
            >
              
              <Grid
                xs={12}
                md={6}
                lg={8}
              >
                <StudentRequest />
              </Grid>
            </Grid>
          </div>
        </Stack>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
