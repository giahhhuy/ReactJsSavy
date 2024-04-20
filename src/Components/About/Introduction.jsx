import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/logoupdated.svg";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            Về Chúng <span className="different">Tôi</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
              Chúng tôi là {" "}
                <span className="different"> Savy Software </span>{" "}
                một đội ngũ các chuyên gia trong lĩnh vực công nghệ thông tin, hòa mình vào không gian sáng tạo để mang đến những giải pháp đột phá và tinh tế nhất cho khách hàng của mình. Chúng tôi không chỉ là một công ty, mà còn là một cộng đồng của những người đam mê sáng tạo và không ngừng khát khao khám phá những giới hạn mới trong thế giới số.
                <span className="different">
                  {" "}
                  
                </span>
                {" "}
                <span className="different">
                  
                </span>
                {" "}
                <span className="different"></span> 
              </h4>
              <h4></h4>
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
