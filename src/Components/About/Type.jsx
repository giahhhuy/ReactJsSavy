import React from "react";
import Typewriter from "typewriter-effect";
import "./Type.css"; // Tạo một file CSS riêng để chứa các định dạng font chữ

export const Type = () => {
  return (
    <>
      <div className="type-wrapper"> {/* Bọc Typewriter trong một div để áp dụng font chữ */}
        <Typewriter
          options={{
            strings: ["Thiết kế Website chuyên nghiệp chuẩn SEO", "Cung cấp các dịch vụ IoT", "Đội ngũ kĩ sư phần mềm chất lượng"],
            autoStart: true,
            loop: true,
            deleteSpeed: 50
          }}
        />
      </div>
    </>
  );
};
