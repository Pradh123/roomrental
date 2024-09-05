import { HiExternalLink } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";
export const RoomCard = () => {
  return (
    <>
      <div className=" border border-red-500   ">
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
            <hr className=" roomutilityborder" />
            <ul className=" flex p-3 ">
              <li className="roomutilityborder p-2"> ₹ 12,000</li>
              <li className="roomutilityborder p-2"> Single & shared </li>
              <li className="roomutilityborder p-2"> 12,000/M</li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};
