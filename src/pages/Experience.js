import React from "react";
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import AtmIcon from '@material-ui/icons/Atm';

function Experience() {
  return (
    <section className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Martinlaakso high school 2014 - 2017
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Kesko 
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Warehouse worker
          </h4>
          <h3>Fulltime 2018-2020 -> Summer jobs</h3>
          <p>
            Managing and packing customer orders
          </p>
          <h4>Referee</h4>
          <p>Antti Heikkinen</p>
          <span>Ask for contact information</span>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Jamk University of Applied Sciences
          </h3>
          <h3>2020 --></h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>
          <p> Information and Communication Technology</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Wärtsilä as software developer trainee
          </h3>
          <h3>2.5.2023 --> 30.9.2023</h3>
          <p>Software Development</p>
          <h4>Referee</h4>
          <p>Sachie Yoshizumi</p>
          <span>Ask for contact information</span>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<AtmIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Thesis at Valmet
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}

export default Experience;