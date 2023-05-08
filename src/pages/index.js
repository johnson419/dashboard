/* eslint-disable react/jsx-max-props-per-line */
import Head from "next/head";
import { Box, Card, Container, Unstable_Grid2 as Grid, Typography } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";

const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          
          <Grid xs={12} lg={8}>
            <Typography>
              <p>About Us</p>
              <p>
                The University of Dar es Salaam (UDSM) is the oldest and premier public university
                in Tanzania. It is situated 13 kilometers on the western side of the city of Dar es
                Salaam, occupying 1,625 acres on the observation hill, famously known as Mlimani in
                Kiswahili. It was established on 25 October 1961 as the University College Dar es
                Salaam (UCD), an affiliate college of the University of London. UDSM became a
                full-fledged university on 1 July 1970 through Act No. 12 of 1970.
              </p>
              <p>
                Ever since UDSM has grown in terms of student intake, academic units, research
                capability and academic programmes. It has two constituent colleges: the Dar es
                Salaam University College of Education located in Dar es Salaam and the Mkwawa
                University College of Education, located in Iringa. There are also seven campus
                colleges, four schools and five institutes hosting numerous academic departments
                covering a wide range of programmes, making it a comprehensive university. The
                academic programmes offered lead to the award of certificates, diplomas, and
                undergraduate and postgraduate degrees. A total of 370 programmes including 17
                taught PhD; 99 PhD by thesis; 142 Masters; 10 Postgraduate; 92 undergraduate; 5
                certificate, and 6 diploma are offered in various academic units. They include
                evening study programmes designed to offer opportunities mainly to employed people,
                although any other interested person with requisite entry qualifications can apply.
                The number of students admitted has been increasing steadily, reaching 39,958 in
                2020/2021 academic year. Female students constitute 46 percent of all students and
                more efforts have been underway to increase this ratio. Each year we receive an
                increased number of applications of students interesting in joining our various
                programmes than the available current capacity.
              </p>
            </Typography>
          </Grid>

          
          <Grid xs={12} md={12} lg={8}>
            <Card>
            <Typography>
                <p>Social Media</p>
                
              </Typography>
            </Card>
          
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
