import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["Thiết kế Website chuyên nghiệp chuẩn SEO", "Cung cấp các dịch vụ IoT", "Đội ngũ kĩ sư phần mềm chất lượng"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
    </>
  );
};
