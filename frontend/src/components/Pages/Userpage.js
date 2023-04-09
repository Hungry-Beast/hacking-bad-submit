import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Backdrop,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import Navbar2 from "../Items/Navbar2";
// import { baseApi } from "../config";

const Component = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #3786e5;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  width: 391px;
  height: 400px;
  border-radius: 41px;
  background: #ffffff;
`;
const Upper = styled.div`
  margin-top: 30px;
  flex: 3;
  width: 100%;
  /* height: 100%; */
`;
const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const H = styled.h1``;
const Mgs = styled.span``;
const Lower = styled.div`
  margin-top: 60px;
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  align-items: center;
  justify-content: center;
  /* padding: 20px 40px; */
`;
const InputField = styled(TextField)`
  width: 80%;
  margin: 10px 0 !important;
`;

const SubmitButton = styled(Button)`
  width: 80%;
  margin: 10px 0 !important;
  height: 50px;
`;

const LowerMost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
`;
const Backgrnd = styled.div`
`;
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Login = ({ setIsLogin, handleModalClose, setUser }) => {
  // const navigator = useNavigate();
  const [open, setOpen] = useState(false);

 

  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       setOpen(true);
//       const resIni = await fetch(baseUrl + "/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: e.target.email.value,
//           password: e.target.password.value,
//         }),
//         redirect: "follow",
//       });

//       const res = await resIni.json();
//       // console.log(resIni)
//       setOpen(false);
//       handleModalClose()
//       if (resIni.status === 200) {

//         localStorage.setItem("user", JSON.stringify(res));
//         setUser(res);
        
//         return;
//       }
//       if (resIni.status === 401) {
//         Swal.fire("Incoorect", "Incoorect  password or Username", "waning");
//       }
//     } catch (error) {
//       setOpen(false);
//       // if (error.response.status === 400) {
//       //   Swal.fire("Incoorect  ", "Incoorect  password or Username", "error");
//       //   return;
//       // }
//       handleModalClose()
//       Swal.fire("Error", "Something went wrong", "error");
//     }
//   };
  return (
    <Backgrnd>
    <Navbar2/>
    <Form style={style} 
    // onSubmit={handleSubmit}
    >
      <Upper>
        <Welcome>
          <H>Hello User!</H>
          <Mgs>Enter your dustbin content</Mgs>
        </Welcome>
        {/* <img src="./Vector2.png" alt="trash" /> */}
      </Upper>
      <Lower>
        <InputField placeholder="In percentage %" name="percentage" />
        
        <SubmitButton type="submit" color="success" variant="contained">
          Submit
        </SubmitButton>
      </Lower>
      
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Form>
    <Form style={style} 
    // onSubmit={handleSubmit}
    >
      <Upper>
        <Welcome>
          <H>Thank You User!</H>
          <Mgs>Appreciate your work</Mgs>
        </Welcome>
        {/* <img src="./Vector2.png" alt="trash" /> */}
      </Upper>
      <Lower>
        <img src="./Done.png" alt="submitted" />
      </Lower>
      
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Form>
    </Backgrnd>
  );
};

export default Login;