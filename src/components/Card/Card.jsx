
import React, { useEffect, useState } from "react";
import "./Card.css";
import axios from "axios";
import ProfileImage from "./ProfileImage";
import "./ProfileImage.css";

const Card = ({userId, id, title, tag }) => {
  const [arr, setArr] = useState([]);

  const solve = async () => {
    try {
      const { data } = await axios.get(
        "https://api.quicksell.co/v1/internal/frontend-assignment/"
      );
      setArr(data.users);
    } catch (error) {
      console.error("API request failed:", error);
    }
  };

  useEffect(() => {
    solve();
  }, []);

  const result = arr.find((user) => user.id === userId);
  let name = "";
  if(result){
    name = result.name;
  }

  return (
    <div className="cardContainer flex-gap-10" style={{ gap: "5px" }}>
      <div className="cardHeading flex-sb">
        <span style={{ textTransform: "uppercase" }} className="color-grey">
          {id}
        </span>
        <div
          className="imageContainer relative"
          style={{ width: "30px", height: "30px" }}
        >
          <ProfileImage
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            name={name}
          />
          <div className="showStatus"></div>
        </div>
      </div>
      <div className="cardTitle" style={{ fontWeight: 200 }}>
        <p>{title}</p>
      </div>
      <div className="cardTags">
        <div className="tags color-grey"> ... </div>
        {tag?.map((elem, index) => {
          return (
            <div key={index} className="tags color-grey">
              {" "}
              <span>•</span> {elem}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
