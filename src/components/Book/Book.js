
import React from 'react';
import { useContext } from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { AdapterDateFns } from "@mui/x-date-pickers-pro/AdapterDateFns";
// import Box from '@mui/material/Box';
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../App";
import { useState } from "react";

const Book = () => {

 const { bedType } = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [value, setValue] = React.useState([null, null]);


  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        Hello, {loggedInUser.name}! Let's book a {bedType} Room.
      </h1>
      <p>
        Want a <Link to="/home">different room?</Link>{" "}
      </p>


      <div
        style={{
          display: "flex",
          position: "relative",
          color: "#fff",
          justifyContent: "center",
          height: "10vh",
        }}
      >
        <LocalizationProvider
          dateAdapter={AdapterDateFns}
          localeText={{ start: "Check-in", end: "Check-out" }}
        >
          <DateRangePicker
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
        </LocalizationProvider>
      </div>
      <br />
      <Button variant="contained">Book Now</Button>
    </div>
  );
};

export default Book;