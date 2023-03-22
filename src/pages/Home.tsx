import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  CustomButton,
  CustomGridContainer,
  GridImage,
  GridImageContainer,
} from "../shared";
import { skills, projects } from "../shared/Constants";

const Home: React.FC<{}> = () => {
  const [count, setCount] = useState(0);

  const countDown = () => {
    setCount((prevVal) => prevVal - 1);
    count <= 0 && setCount(skills.length - 1);
    console.log(count);
  };

  const countUp = () => {
    setCount((prevVal) => prevVal + 1);
    count >= skills.length - 1 && setCount(0);
    console.log(count);
  };

  return (
    <>
      <CustomGridContainer>
        <GridImageContainer>
          <img
            src={skills[count].img}
            alt={skills[count].name}
            width="200px"
            height="180px"
          />
          <br />
          <CustomButton onClick={countDown}>Previous</CustomButton>
          <CustomButton onClick={countUp}>Next</CustomButton>
          <br />
          <progress value={skills[count].value} max="10" />
        </GridImageContainer>
        <p>
          <em>
            Welcome to my online portfolio! As a junior software developer, I am
            passionate about creating applications that are not only functional,
            but also user-friendly and visually appealing. In this portfolio,
            you will find some of my recent projects, including a weather app,
            meme generator, and memo application. These projects have allowed me
            to hone my skills in programming languages such as Python, HTML, and
            CSS, and have given me valuable experience in working with APIs,
            databases, and front-end frameworks. I believe that software
            development is not just about writing code, but also about
            understanding the needs of the user and creating solutions that meet
            those needs. That is why I always strive to make my applications
            intuitive and easy to use. Thank you for taking the time to visit my
            portfolio. Please feel free to explore my projects and contact me if
            you have any questions or if you are interested in working together
            on a project.
          </em>
        </p>
        <GridImageContainer>
          {projects.map((image) => {
            return (
              <NavLink to={image.link}>
                <GridImage>
                  <img
                    src={image.img}
                    alt={image.name}
                    width="150px"
                    height="120px"
                  />
                </GridImage>
              </NavLink>
            );
          })}
        </GridImageContainer>
      </CustomGridContainer>
    </>
  );
};

export default Home;
