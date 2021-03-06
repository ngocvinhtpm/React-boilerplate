import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormHelperText from '@material-ui/core/FormHelperText';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

// eslint-disable-next-line react/prefer-stateless-function
class Contact extends Component {
  render() {
    return (
        <div>
        <h1>Trang Liên hệ </h1>
      <Grid container justify="center" alignContent="center">
        <Grid item xs={6} md={4}>
          <Paper
            elevation={4}
            style={{ padding: '20px 15px', marginTop: '30px' }}
          >
            <Typography gutterBottom>Signup</Typography>
            <Form>
              <FormControl
                fullWidth
                margin="normal"
                error={
                  this.props.touched.username && !!this.props.errors.username
                }
              >
                <InputLabel>Username</InputLabel>
                <Field
                  name="username"
                  render={({ field }) => <Input fullWidth {...field} />}
                />
                {this.props.touched.username && (
                  <FormHelperText>{this.props.errors.username}</FormHelperText>
                )}
              </FormControl>

              <FormControl
                fullWidth
                margin="normal"
                error={this.props.touched.email && !!this.props.errors.email}
              >
                <InputLabel>Email</InputLabel>
                <Field
                  name="email"
                  render={({ field }) => <Input fullWidth {...field} />}
                />
                {this.props.touched.email && (
                  <FormHelperText>{this.props.errors.email}</FormHelperText>
                )}
              </FormControl>

              <FormControl
                fullWidth
                margin="normal"
                error={
                  this.props.touched.password && !!this.props.errors.password
                }
              >
                <InputLabel>Password</InputLabel>
                <Field
                  name="password"
                  render={({ field }) => (
                    <Input fullWidth type="password" {...field} />
                  )}
                />
                {this.props.touched.password && (
                  <FormHelperText>{this.props.errors.password}</FormHelperText>
                )}
              </FormControl>
              <FormControl fullWidth margin="normal">
                <Button color="primary" type="submit">
                  Signup
                </Button>
              </FormControl>
            </Form>
          </Paper>
        </Grid>
      </Grid>
      </div>
    );
  }
}

const FormikForm = withFormik({
  mapPropsToValues() {
    // Init form field
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  validationSchema: Yup.object().shape({
    // Validate form field
    username: Yup.string()
      .required('Username is required')
      .min(5, 'Username phải tối thiểu 5 ký tự')
      .max(10, 'Username tối đa 10 ký tự'),
    email: Yup.string()
      .required('Phải nhập vào email')
      .email('Email không hợp lệ'),
    password: Yup.string()
      .required('Phải nhập vào mật khẩu')
      .min(8, 'Password must have min 8 characters'),
  }),
})(Contact);

export default FormikForm;