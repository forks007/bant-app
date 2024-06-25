import { useState } from "react";
import EventCard, { IEventCardProps } from "./event-card";
import SectionContainer from "./section-container";
import Datepicker from "tailwind-datepicker-react";

const data: IEventCardProps[] = [
  {
    address:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, ipsam.",
    countdown: "2 hours 30 minutes",
    date: "june 20,2024",
    image: "wZjJxOx8FPI",
    name: "Lorem ipsum dolor sit.",
    time: "6pm to 10pm",
  },
  {
    address:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, ipsam.",
    countdown: "2 hours 30 minutes",
    date: "june 20,2024",
    image: "wZjJxOx8FPI",
    name: "Lorem ipsum dolor sit.",
    time: "6pm to 10pm",
  },
  {
    address:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, ipsam.",
    countdown: "2 hours 30 minutes",
    date: "june 20,2024",
    image: "wZjJxOx8FPI",
    name: "Lorem ipsum dolor sit.",
    time: "6pm to 10pm",
  },
  {
    address:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, ipsam.",
    countdown: "2 hours 30 minutes",
    date: "june 20,2024",
    image: "wZjJxOx8FPI",
    name: "Lorem ipsum dolor sit.",
    time: "6pm to 10pm",
  },
  {
    address:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, ipsam.",
    countdown: "2 hours 30 minutes",
    date: "june 20,2024",
    image: "wZjJxOx8FPI",
    name: "Lorem ipsum dolor sit.",
    time: "6pm to 10pm",
  },
];

const options = {
  title: "Demo Title",
  autoHide: true,
  todayBtn: false,
  clearBtn: true,
  // clearBtnText: "Clear",
  maxDate: new Date("2030-01-01"),
  minDate: new Date("1950-01-01"),
  theme: {
    background: "bg-[#006A51] dark:bg-[#006A51]",
    todayBtn: "",
    clearBtn: "",
    icons: "",
    text: "text-center",
    disabledText: "bg-red-500",
    input:
      "bg-[#006A51] dark:bg-[#006A51] text-center text-xs font-bold tracking-wide",
    inputIcon: "",
    selected: "",
  },
  icons: {
    // () => ReactElement | JSX.Element
    // prev: () => <span>{}</span>,
    // next: () => <span>Next</span>,
  },
  datepickerClassNames: "top-12",
  // defaultDate: new Date("2024-07-01"),
  language: "en",
  disabledDates: [],
  weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
  inputNameProp: "date",
  inputIdProp: "date",
  inputPlaceholderProp: "Select Date",
  inputDateFormatProp: {
    day: "numeric",
    month: "long",
    year: "numeric",
  },
};
const EventsList = () => {
  const [show, setShow] = useState<boolean>(false);
  const handleChange = (selectedDate: Date) => {
    console.log(selectedDate);
  };
  const handleClose = (state: boolean) => {
    setShow(state);
  };
  return (
    <SectionContainer parentClass="my-8">
      <div>
        <div className="flex justify-center items-center gap-8">
          <h1 className="text-3xl text-[#006A51] font-bold uppercase text-center">
            upcoming events
          </h1>
          <div>
            <Datepicker
              options={options}
              onChange={handleChange}
              show={show}
              setShow={handleClose}
            />
          </div>
        </div>

        <div className=" shadow-lg divide-y-2 p-8">
          {data.map((event) => (
            <EventCard {...event} key={event.name} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default EventsList;
