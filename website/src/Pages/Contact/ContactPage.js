import { useState } from "react";

import classes from "./ContactPage.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const ContactPage = () => {
  const [error, setError] = useState({
    FirstName: false,
    LastName: false,
    Email: false,
    Phone: false,
    Query: false,
  });

  const [formdata, setform] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
    Query: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setform({ ...formdata, [name]: value });
  };

  const handleError = (formdata) => {
    Object.entries(formdata).forEach((field) => {
      const [name, value] = field;

      if (value === "") {
        setError({ ...error, [name]: true });
        console.log(error);
      }
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    handleError(formdata);
  }

  return (
    <div className={classes.container}>
      <Box
        className={classes.form}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "400px" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className={classes.name}>
          <TextField
            name="FirstName"
            value={formdata?.FirstName}
            id="standard-basic"
            label="First Name"
            variant="outlined"
            required
            error={error?.FirstName}
            helperText={error?.FirstName && "Please enter your first name."}
            onChange={handleChange}
          />
          <TextField
            name="LastName"
            value={formdata?.LastName}
            id="standard-basic"
            label="Last Name"
            variant="outlined"
            required
            error={error?.LastName}
            helperText={error?.LastName && "Please enter your last name."}
            onChange={handleChange}
          />
        </div>
        <TextField
          name="Email"
          value={formdata?.Email}
          id="standard-basic"
          label="Email"
          variant="outlined"
          required
          error={error?.Email}
          helperText={error?.Email && "Please enter your email."}
          onChange={handleChange}
        />
        <TextField
          name="Phone"
          value={formdata?.Phone}
          id="standard-basic"
          label="Phone no."
          variant="outlined"
          required
          error={error?.Phone}
          helperText={error?.Phone && "Please enter your phone number."}
          onChange={handleChange}
        />
        <TextField
          name="Query"
          value={formdata?.Query}
          id="filled-textarea"
          label="Query"
          placeholder="Type your query"
          multiline
          variant="filled"
          rows={6}
          required
          error={error?.Query}
          helperText={error?.Query && "Please enter your Query."}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </Box>
      <div className={classes.infoSection}>
        <h2 className={classes.heading}>Contact Us</h2>
        <div className={classes.details}>
          <p className={classes.para}>
            We are 24 hours ready to receive your queries Go ahead and contact
            our team today
          </p>
          <ul className={classes.list}>
            <h3>Reach us @ info.acedrops@gmail.com</h3>
            <li>
              <i><i class="fa-solid fa-phone"></i>{"  "}6392970547</i>
              <i><i class="fa-solid fa-phone"></i>{"  "}9565973316</i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
