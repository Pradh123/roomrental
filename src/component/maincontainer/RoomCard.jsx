import { HiExternalLink } from "react-icons/hi";
import { FaMapMarkerAlt, FaUserGraduate, FaCalendarAlt } from "react-icons/fa";
import { GetOwnerDetails } from "../Buttons/Buttons";
export const RoomCard = () => {
  const infoCardData = [
    {
      icon: <FaUserGraduate className="text-[20px]" />,
      Title: "Any",
      text: "Prefferd Teanats",
    },
    {
      icon: <FaCalendarAlt className="text-[20px]" />,
      Title: "Any",
      text: "Prefferd Teanats",
    },
    {
      icon: <FaUserGraduate className="text-[20px]" />,
      Title: "Any",
      text: "Prefferd Teanats",
    },
    {
      icon: <FaUserGraduate className="text-[20px]" />,
      Title: "Any",
      text: "Prefferd Teanats",
    },
  ];

  return (
    <>
      <div className="utilsBorder  ">
        <main>
          <section>
            <div className="p-3">
              <h1 className="text-bold  font-semibold hover:text-red-400   sm:text-[15px]  md:text-[17px] xl:text-[19px]   cursor-pointer flex gap-2 items-center">
                PG For Anyone In Sector 15
                <HiExternalLink />
              </h1>
              <p className=" flex  items-center gap-2 ">
                Amaltash Marg, near Priyagold Biscuits, Sector 15
                <FaMapMarkerAlt />
              </p>
            </div>
            <hr className="utilsBorder" />
            <ul className=" p-3  w-[100%]   grid grid-cols-3 ">
              <li className="roomutilityborder  text-center p-2">
                <p className="font-bold">₹ 12,000</p>
                <p> Deposit</p>
              </li>
              <li className="roomutilityborder text-center  p-2">
                <p className="font-bold">Single & shared</p>

                <p> Room type Available </p>
              </li>
              <li className="  text-center p-2">
                <p className="font-bold"> 12,000</p>
                <p> Rent/Month</p>
              </li>
            </ul>
            <hr className=" utilsBorder" />
            <div className=" mt-4 p-4  md:flex  md:gap-3  ">
              <img
                src="https://img.theweek.in/content/dam/week/news/biz-tech/images/2021/11/23/nobroker-logo.jpg"
                className="  max-w-[300px]  md:w-[30%] h-[200px]"
                alt=""
              />
              <main className="  md:w-[65%] w-[100%]">
                <div className="utilsBorder p-2  grid grid-cols-2  w-full ">
                  {" "}
                  {infoCardData.map((data, i) => (
                    <div key={i}>
                      <ul
                        className={`flex  items-center gap-1  md:m-3   m-[4px]  ${
                          i % 2 === 0 && "roomutilityborder "
                        }`}
                      >
                        <FaUserGraduate className="text-[30px]" />
                        <li>
                          <p className=" font-semibold">Any</p>
                          <p className="text-slate-400 text-nowrap">
                            Prefferd Teanats
                          </p>
                        </li>
                      </ul>
                      <hr
                        className={` utilsBorder    ${
                          (i === 2 || i === 3) && "hidden text-start"
                        }`}
                      />
                    </div>
                  ))}
                </div>
                <GetOwnerDetails />
              </main>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
