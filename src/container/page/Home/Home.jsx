import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState("");


  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setData(userInfo);
    if (!userInfo) {
      navigate("/");
    }
  }, []);

  const logOut = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  return (
    <>
      <div
        className="container-fluid vh-100 vw-100  d-flex flex-column justify-content-center align-items-center"
        style={{ background: "#ed5627" }}
      >
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex  align-items-center">
            <h1 className="display-3 mb-3 mx-2">Welcome</h1>
            <h2 className="  text-center text-white display-5">{data.name}</h2>
          </div>
         
        </div>

        <h5>email: {data.email}</h5>
        <button className="btn  btn-outline-light mt-5" onClick={logOut}>
          LogOut
        </button>
      </div>
    </>
  );
};

export default Home;
