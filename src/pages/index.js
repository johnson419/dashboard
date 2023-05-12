/* eslint-disable react/jsx-max-props-per-line */
import Head from "next/head";
import { Box, Card, Container, Unstable_Grid2 as Grid, Link, Typography } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { Stack } from "@mui/system";

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
      <Container maxWidth="none">
        <Grid container spacing={3}>
          
          <Grid xs={12} lg={12}>
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

          
          <Grid xs={12} md={12} lg={12}>
            <Card>
            <Box
            component="main"
            sx={{
              flexGrow: 1,
              py: 8,
            }}
            >
              <Container maxWidth="none">
                <Grid container spacing={3} alignItems={"stretch"}>
                  <Grid item xs={12} sm={4} md={4} lg={4}>
                    <Typography>
                      <p>University</p>
                    </Typography>
                    <Stack>
                    <Link href="#">Admission</Link>
                    <Link href="#">Webmail</Link>
                    <Link href="#">ARIS</Link>
                    <Link href="#">Prospectus 2022/2023</Link>
                    <Link href="#">Almanac 2022/2023</Link>
                    <Link href="#">Hotuba ya Bajeti ya Wizara ya Elimu Sayansi na Teknolojia Mwaka 2022-23</Link>
                    <Link href="#">Learning Management System</Link>
                    </Stack>
                    
                  </Grid>
                  <Grid item xs={12} sm={4} md={4} lg={4}>
                    <Typography>Social Media</Typography>
                    <Stack>
                    <Link href="#">Facebook</Link>
                    <Link href="#">Twitter</Link>
                    <Link href="#">Instagram</Link>
                    <Link href="#">Youtube</Link>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={4} md={4} lg={4}>
                    <Typography>CONTACTS</Typography>
                    <Stack>
                      <p>University of Dar es Salaam</p>
                      <p>Mwalimu Julius Nyerere Mlimani Campus</p>
                      <p>P.O. BOX 35091</p>
                      <p>Dar es Salaam</p>
                      <p>Tanzania</p>
                      
                      <p>Email: vc@udsm.ac.tz</p>
                      <p>Website: www.udsm.ac.tz</p>
                    </Stack>
                  </Grid>
                  {/* <Grid xs={12} lg={8}></Grid> */}
                </Grid>
              </Container>
            </Box>
            </Card>
          
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
