import React from "react";

const About = () => {
  return (
    <div>
      <h1>About This App:</h1>
      <p className="my-1">This is a full stack React App for keeping pokemon</p>
      <p className="my-1">Created 2020 by Deale Development </p>
      <a href="https://www.deale-development.com/index.html">
        {" "}
        <img
          src="https://www.deale-development.com/img/DealeLogo.png"
          class="dealeLogo"
          alt=""
        />
      </a>
      <p className="bg-dark p">
        <strong>Version:</strong>1.0.0
      </p>
    </div>
  );
};
export default About;
