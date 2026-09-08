import React from "react";
import Layout from "../Layout/Layout";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import {useDispatch} from "react-redux"
import { openDeletePopup, openEmployeePopup } from "../../store/features/popup/popup.slice";

const Employees = () => {
  return (
    <Layout>
      <ul className="list bg-base-100 rounded-box shadow-md py-10">
            <EmployeeCard/>
            <EmployeeCard/>
            <EmployeeCard/>
            <EmployeeCard/>
            <EmployeeCard/>
      </ul>
    </Layout>
  );
};

const EmployeeCard = () => {

  const dispatch = useDispatch();

    return(
         <li className="list-row">
          <div>
            <img
              className="size-10 rounded-box"
              alt="Tailwind CSS list item"
              src="https://img.daisyui.com/images/profile/demo/1@94.webp"
            />
          </div>
          <div>
            <div>Dio Lupa</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              Remaining Reason
            </div>
          </div>
          <p className="list-col-wrap text-xs">
            "Remaining Reason" became an instant hit, praised for its haunting
            sound and emotional depth. A viral performance brought it widespread
            recognition, making it one of Dio Lupa’s most iconic tracks.
          </p>
          <button className="btn btn-square btn-ghost" onClick={()=>dispatch(openEmployeePopup())}>
           <CiEdit />
          </button>
          <button className="btn btn-square btn-ghost">
            <svg
              aria-label="Favorite"
              className="size-[1.2em]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </g>
            </svg>
          </button>
          <button className="btn btn-square btn-ghost" onClick={()=>dispatch(openDeletePopup())}>
            <MdDeleteForever />
          </button>
        </li>
    )

}
export default Employees;
