import { MdContactPhone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { GetOwnerDetails } from "../Buttons/Buttons";
import { UserContext } from "../../Context/Context";
import { useContext } from "react";
export const OwnerDetails = () => {
  const { setOwenerDetailsPopUp } = useContext(UserContext);

  return (
    <>
      <div className=" absolute sm:right-[15%] sm:w-[70%]  bg-white  xl:w-[50%] xl:right-[25%] p-4 flex  z-50 min-h-[500px] rounded-lg">
        <RxCross2
          className=" absolute right-3 top-3 text-[20px] font-semibold"
          onClick={() => {
            setOwenerDetailsPopUp(false);
          }}
        />
        <div className=" bg-slate-200 w-[40%]  flex  flex-col      justify-end  h-[490px] gap-[20px] rounded-l-lg  p-5">
          <MdContactPhone className="w-[100px] h-[100px]" />
          <p>Get Owner Details</p>
          <ul className="  flex flex-col gap-3">
            <li>✓ 100% genuine</li>
            <li> ✓ Zero Brocrage</li>
            <li> ✓ New Listing everyday</li>
          </ul>
        </div>
        <div className=" w-[60%]         h-[490px]  gap-[20px] ">
          <section className=" gap-4 w-[96%] m-[2%]">
            <label
              htmlFor="phone number"
              className=" text-[20px] font-semibold text-center"
            >
              Enter Phone Number to continue
            </label>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              className=" outline-none   border-2 border-t-0 border-l-0 border-r-0  border-red-500 w-[96%] p-2 m-[2%]"
            />
            <GetOwnerDetails />
          </section>
        </div>
      </div>
    </>
  );
};
