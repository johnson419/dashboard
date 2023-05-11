import { useCallback, useState } from "react";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Alert,
  Box,
  Button,
  FormHelperText,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useAuth } from "src/hooks/use-auth";
import { Layout as AuthLayout } from "src/layouts/auth/layout";

const Page = ({history}) => {
  const router = useRouter();
  const auth = useAuth();
  // const [method, setMethod] = useState("email");
  // const formik = useFormik({
  //   initialValues: {
  //     email: "admin@udsm.ac.tz",
  //     password: "Password123!",
  //     submit: null,
  //   },
  //   validationSchema: Yup.object({
  //     email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
  //     password: Yup.string().max(255).required("Password is required"),
  //   }),
  //   onSubmit: async (values, helpers) => {
  //     try {
  //       await auth.signIn(values.email, values.password);
  //       router.push("/");
  //     } catch (err) {
  //       helpers.setStatus({ success: false });
  //       helpers.setErrors({ submit: err.message });
  //       helpers.setSubmitting(false);
  //     }
  //   },
  // });

  const handleSkip = useCallback(() => {
    auth.skip();
    router.push("/");
  }, [auth, router]);

  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
 
  const authenticate = async (event) => {
    event.preventDefault();
    console.log('Authenticating user...');
 
    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
 
      const data = await response.json();
 
      if (response.ok) {
        // user is authenticated, redirect to dashboard or home page
        console.log('User authenticated:', data);
        history.push('/');
      } else {
        // authentication failed, display error message
        console.error('Authentication failed:', data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Box
        sx={{
          backgroundColor: "background.paper",
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: "100px",
            width: "100%",
          }}
        >
          <div>
            <Stack spacing={1} sx={{ mb: 3 }}>
              <Typography variant="h4">Login</Typography>
              <Typography color="text.secondary" variant="body2">
                Don&apos;t have an account? &nbsp;
                <Link
                  component={NextLink}
                  href="/auth/register"
                  underline="hover"
                  variant="subtitle2"
                >
                  Register
                </Link>
              </Typography>
            </Stack>
            {method === "email" && (
              <form 
              onSubmit={(event) => authenticate(event, history)}>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    value={email}
                  />
                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    onChange={(e) => setPass(e.target.value)}
                    type="password"
                    value={password}
                  />
                </Stack>
                <FormHelperText sx={{ mt: 1 }}>Optionally you can skip.</FormHelperText>
                {formik.errors.submit && (
                  <Typography color="error" sx={{ mt: 3 }} variant="body2">
                    {formik.errors.submit}
                  </Typography>
                )}
                <Button fullWidth size="large" sx={{ mt: 3 }} type="submit" variant="contained">
                  Continue
                </Button>
                <Button fullWidth size="large" sx={{ mt: 3 }} onClick={handleSkip}>
                  Skip authentication
                </Button>
                <Alert color="primary" severity="info" sx={{ mt: 3 }}>
                  <div>
                    You can use <b>admin@udsm.act.tz</b> and password <b>Password123!</b>
                  </div>
                </Alert>
              </form>
            )}
          </div>
        </Box>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;

export default Page;
