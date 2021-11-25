import React, { useState, useEffect } from "react";
import "./Trending.css";
import Header from '../Header';
import { useLocation } from 'react-router-dom';
import Repositories from "../Repositories/Repositories";
import axios from "axios";
import githubTrends from 'github-trends-api';

const Trending = () => {
  const [trendingRepos, setTrendingRepos] = useState([])
  const headers = {
    headers: {

    },
    withCredentials: 'false',
  };
  useEffect(() => {
    axios.get(`http://gh-trending-api.herokuapp.com/repositories`, {
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      }
    }).then((res) => {
      console.log("res", res);
      if (res.status === 200)
        setTrendingRepos(res.data)
    }).catch((error) => {
      console.log("error", error);
    })
  }, [])
  return (
    <>
      <Header />
      <Repositories />
    </>
  );
};

export default Trending;
