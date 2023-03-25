import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWorkHistory } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
const Timeline = () => {
  return (
    <div className="bg-[rgba(26,21,5,0.6)] relative  md:px-12 sm:px-8 px-4 w-[100%] min-h-[100vh]">
      <h1 className="text-center mb-8 font-[Varela] text-[#ee2a7b] font-bold text-5xl">
        TIMELINE
      </h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(255,255,255,0.1)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255,255,255,0.1)" }}
          date="25 Mar - 5 Apr"
          iconStyle={{ background: "rgb(36,36,36,1)", color: "#fff" }}
          icon={<IoIosSchool className="text-slate-100" />}
        >
          <h1 className=" font-bold text-xl text-yellow-500">
            REGISTRATION BEGINS
          </h1>
          <p>
            Registration opens up for students to register with their respective
            teams and project ideas for Hackathon.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(255,255,255,0.1)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255,255,255,0.1)" }}
          date="6 Apr - 8 Apr"
          iconStyle={{ background: "rgb(36,36,36,1)", color: "#fff" }}
          icon={<IoIosSchool className="text-slate-100" />}
        >
          <h1 className="text-yellow-500 font-bold text-xl">PHASE 1 RESULT</h1>
          <p>
            Top 40 teams will be selected based on Idea submission for Round 2
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(255,255,255,0.1)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255,255,255,0.1)" }}
          date="15 Apr - 17 Apr"
          iconStyle={{ background: "rgb(36,36,36,1)", color: "#fff" }}
          icon={<IoIosSchool className="text-slate-100" />}
        >
          <h1 className="text-yellow-500 font-bold text-xl">
            HOUSE OF HACKERS MAIN EVENT
          </h1>
          <p>
            House of Hackers will be a two-day event consisting of various guest
            lectures, workshops, and project evaluation.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(255,255,255,0.1)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255,255,255,0.1)" }}
          date="18 Apr - 19 Apr"
          iconStyle={{ background: "rgb(36,36,36,1)", color: "#fff" }}
          icon={<IoIosSchool className="text-slate-100" />}
        >
          <h1 className="text-yellow-500 font-bold text-xl">
            RESULT DECLARATION
          </h1>
          <p >
            The ultimate genius will be revealed by our Judging Panel on 17th
            April 2023
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
export default Timeline;
