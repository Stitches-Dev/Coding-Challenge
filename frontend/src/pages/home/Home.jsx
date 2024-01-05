import React, { useEffect } from "react";
import "./home.css";
import SearchInput from "../../Components/SearchInput/SearchInput";
import BasicGrid from "../../Components/grid/BasicGrid";
import UniCard from "../../Components/Unicard/UniCard";
import { Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllUniversities } from "../../redux/apiCalls";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const unis = useSelector((state) => state.university.University);
  console.log(unis);
  const navigate = useNavigate()
  useEffect(() => {
    getAllUniversities(dispatch);
  }, [dispatch]);


  const handleClick=(id)=>{
      navigate(`/university/${id}`)
  }


  return (
    <div className="homeContainer">
      <div className="homeTop">
        <div className="titleTop">All Universities</div>
        <div className="searchInput">
          <SearchInput />
        </div>
      </div>
      <div className="homeBody">
        <div className="cardContainer">
          {unis.map((uni, index) => {
            return (
              <div className="unicard" key={index}
              onClick={()=>handleClick(uni.id)}>
                <UniCard
                  image={uni.cover_image}
                  uniDescription={uni.description}
                  logo={uni.logo}
                  summary={uni.summary}
                  ranking={uni.ranking}
                  languages={uni.languages}
                 
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="homebottom">
        <Pagination />
      </div>
    </div>
  );
};

export default Home;
