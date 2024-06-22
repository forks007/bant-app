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
        <div className="flex justify-center gap-8">
          <h1 className="text-3xl text-[#006A51] font-bold uppercase text-center">
            upcoming events
          </h1>

          <button
            type="button"
            data-modal-target="timepicker-modal"
            data-modal-toggle="timepicker-modal"
            className="border focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm p-2  text-center inline-flex items-center focus:ring-gray-600 hover:bg-[#006A51] border-gray-700 text-white bg-gray-700"
          >
            <svg
              className="w4 h-4 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div
          id="timepicker-modal"
          aria-hidden="true"
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[9999] justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full "
        >
          <div className="relative p-4 w-full max-w-[23rem] max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-800">
              <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="timepicker-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 pt-0">
                <div
                  inline-datepicker
                  datepicker-autoselect-today
                  className="mx-auto sm:mx-0 flex justify-center my-5 [&>div>div]:shadow-none [&>div>div]:bg-gray-50 [&_div>button]:bg-gray-50"
                ></div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    data-modal-hide="timepicker-modal"
                    className="py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Discard
                  </button>
                </div>
              </div>
            </div>
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
