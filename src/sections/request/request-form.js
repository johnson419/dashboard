import { useCallback, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { department, course, college, year } from './config';



export  const StudentRequest = () => {
  const [values, setValues] = useState({
    department: '',
    course: '',
    college: '',
    year: '',
    noOfStudents: '',
  });
  
  const handleChange = useCallback(
    (event) => {
      setValues((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
    },
    []
  );

  return (
    <form
      autoComplete="on"
      noValidate
      onSubmit={handleSubmit}
    >
      <Card>
        <CardHeader
          subheader="Please fill the criteria for student(s) that you can offer Practical Training to"
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Select Department"
                  name="department"
                  onChange={handleChange}
                  value={values.state}
                  required
                  select
                  SelectProps={{ native: true }}
                >
                  {department.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Select course"
                  name="course"
                  onChange={handleChange}
                  value={values.state}
                  required
                  select
                  SelectProps={{ native: true }}
                >
                  {course.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
               <TextField
                  fullWidth
                  label="Select college"
                  name="college"
                  onChange={handleChange}
                  value={values.state}
                  required
                  select
                  SelectProps={{ native: true }}
                >
                  {college.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
               <TextField
                  fullWidth
                  label="Select year"
                  name="year"
                  onChange={handleChange}
                  value={values.state}
                  required
                  select
                  SelectProps={{ native: true }}
                >
                  {year.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Number of students"
                  name="noOfStudents"
                  type='number'
                  onChange={handleChange}
                  value={values.state}
                  
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained">
            Save details
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
