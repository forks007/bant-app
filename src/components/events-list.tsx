import EventCard, { IEventCardProps } from "./event-card";
import SectionContainer from "./section-container";

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

const EventsList = () => {
  return (
    <SectionContainer parentClass="my-8">
      <div>
        <h1 className="text-3xl text-[#006A51] font-bold uppercase text-center">
          upcoming events
        </h1>
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
