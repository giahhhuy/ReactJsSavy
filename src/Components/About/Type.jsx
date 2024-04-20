import React from "react";
import Typewriter from "typewriter-effect";
import "./Type.css";

export const Type = () => {
  return (
    <>
      <div className="type-wrapper">
        <Typewriter
          options={{
            strings: ["Các dịch vụ của chúng tôi","Thiết kế Website chuẩn SEO", "Lĩnh vực IoT", "Trí Tuệ Nhân Tạo AI", "Thiết kế đồ họa"],
            autoStart: true,
            loop: true,
            typeSpeed: 20,
            deleteSpeed: 50,
            delay: 100,
            cursor: "|", // Thay đổi con trỏ thành dấu gạch dưới
            pauseFor: 0, // Dừng 2 giây trước khi viết lại chuỗi
          }}
        />
      </div>
    </>
  );
};
