
import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import StarRateIcon from "@material-ui/icons/StarRate";
import { ThemeContext } from "../../Context/theme";
import { GenIcon } from "react-icons/lib";
import { StepIcon } from "@material-ui/core";
// import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

export const Timeline = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [linecolor, setlinecolor] = React.useState(
    themename === "light" ? "#23283e" : "#fcfcfc"
  );

  React.useEffect(() => {
    if (themename === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themename]);
  return (
    <>
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-right">
        Thành Viên  <span className="different">Sáng Lập Công Ty</span>
        </h2>
        <VerticalTimeline lineColor={linecolor}>
          <VerticalTimelineElement
            date={""}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Bui Duc Lam
            </h3>
            <a href="#"><img src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/129137971_2730797367238379_8956348342316889437_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KNTkHoK-GMkAb64W6Oj&_nc_ht=scontent.fhan14-1.fna&oh=00_AfCzXE4IFy66csogW1V-ehnxX-gqPCke89iGAOn_bz4hBw&oe=664B1D92"className="timeline-image" alt="Lam"/></a>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
            <h3 className="lam">IoT Engineer</h3>
            </h4>
            <p data-aos="fade-right">
              
  "Lâm là một kỹ sư IoT đầy nhiệt huyết và tài năng. Từ khi bắt đầu sự nghiệp của mình, anh đã dành nhiều thời gian và nỗ lực để nghiên cứu và áp dụng công nghệ IoT vào các dự án của mình.

Ngày càng tăng lên là một nguồn lực quan trọng trong lĩnh vực công nghệ thông tin, IoT (Internet of Things - Internet của mọi vật) là lĩnh vực mà Lâm đặc biệt quan tâm. Anh ấy hiểu rằng IoT không chỉ là về việc kết nối các thiết bị vật lý vào internet mà còn về việc tạo ra các hệ thống thông minh có khả năng thu thập và phân tích dữ liệu để cung cấp thông tin hữu ích và giải pháp cho nhiều lĩnh vực khác nhau"
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={""}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Trinh Hoang Minh
            </h3>
            <a href="#"> <img src="https://scontent.fhan14-4.fna.fbcdn.net/v/t1.15752-9/437197281_1371516630216568_4027458013517251929_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1arP0XK6QmAAb7TUGt1&_nc_ht=scontent.fhan14-4.fna&oh=03_Q7cD1QFvyDA7vr36P2oOZIk8gyIWtkKdpU3Io8rva6MLjNVe7g&oe=664B3356" className="timeline-image2" alt="Minh" /></a>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              <h3 className="Minh"> Backend .NET Developer</h3>
            </h4>
            <p data-aos="fade-right">
             
             "Trịnh Hoàng Minh là một lập trình viên fullstack tại FPT Software, có kinh nghiệm hai năm trong việc phát triển ứng dụng sử dụng công nghệ .NET. Với sự am hiểu sâu sắc về cả phía Frontend và Backend, Minh đã thể hiện được khả năng đa năng và linh hoạt trong việc xây dựng các ứng dụng web phức tạp.

Trong vai trò của mình, Minh đã tham gia vào quy trình phát triển ứng dụng từ giai đoạn thiết kế đến triển khai và bảo trì. Anh ấy đã có kinh nghiệm làm việc với các công nghệ và framework phổ biến trong hệ sinh thái .NET như ASP.NET MVC, Entity Framework, và AngularJS hoặc ReactJS cho phía Frontend. Ngoài việc code giỏi thì Minh cũng trang bị cho mình Tiếng Anh rất tốt với số điểm TOEIC là 945 điểm gần đạt điểm tối đa.

Minh cũng có khả năng thiết kế cơ sở dữ liệu và tối ưu hóa hiệu suất của ứng dụng, đảm bảo rằng dữ liệu được lưu trữ và truy xuất một cách hiệu quả nhất."
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={""}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Nguyen Quang Hieu
            </h3>
            <a href=""><img src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.15752-9/431329247_315540828217463_7118292350272392718_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8vI_r9H-BoUAb5EZfoe&_nc_ht=scontent.fhan14-1.fna&oh=03_Q7cD1QF50U0TgqpXTGa3f-FhJbwaKdaL6phy6RzNeynMpXwPAw&oe=664B4A73" className="timeline-image3" alt="Hieu" /></a>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
            <h3 class="Hieu">Senior Software Engineer at Google</h3>
            </h4>
            <p data-aos="fade-right">
            "Nguyễn Quang Hiếu là một Senior tài năng tại Google, với sự đam mê, kiến thức sâu rộng và tinh thần sáng tạo. Anh đã đóng góp quan trọng vào sự phát triển của nhiều dự án quan trọng của Google và là nguồn cảm hứng cho đồng nghiệp. Đồng thời, Hiếu cũng là một người bạn đồng hành đáng tin cậy và sẵn lòng chia sẻ kiến thức để giúp mọi người phát triển"
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={""}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Pham Gia Huy
            </h3>
            <a href="#"><img src="https://i.imgur.com/vjbHZfq.jpeg" className="timeline-image4" alt="Huy" /></a>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
            <h3 className="Huy">Software Engineer</h3>
            </h4>
            <p data-aos="fade-right">
            "Huy là một lập trình viên Frontend chuyên sử dụng ReactJS, người có đam mê sâu sắc và kỹ năng vững vàng trong việc phát triển ứng dụng web hiện đại. Với tư duy logic sắc bén và khả năng tạo ra các giao diện người dùng đẹp mắt và tương tác, Huy đã thể hiện được sự xuất sắc trong lĩnh vực công nghệ thông tin.

Trong quá trình làm việc, Huy không chỉ tập trung vào việc viết code mà còn coi trọng việc hiểu rõ yêu cầu của dự án và tương tác một cách tích cực với các thành viên khác trong nhóm phát triển. Anh ấy thường tham gia vào quá trình thiết kế giao diện, đưa ra ý tưởng và giải pháp để tối ưu hóa trải nghiệm người dùng"
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={""}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<StarRateIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Anonymous
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              
            </h4>
            <p data-aos="fade-right">
            Loading...
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={""}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<StarRateIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Anonymous
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              
            </h4>
            <p data-aos="fade-right">
            Loading...
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={""}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<StarRateIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Anonymous
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              
            </h4>
            <p data-aos="fade-right">
            Loading...
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            icon={<StarRateIcon />}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};
