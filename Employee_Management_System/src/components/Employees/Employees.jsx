import React from "react";
import Layout from "../Layout/Layout";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import {useDispatch, useSelector} from "react-redux"
import { openDeletePopup, openEmployeePopup } from "../../store/features/popup/popup.slice";
import { deleteEmployee } from "../../store/features/employee/employee.thunk";
import { toggleHighlight } from "../../store/features/employee/employee.slice";

const Employees = () => {

  const employeeDetails = useSelector(state => state.employee.employees)
  return (
    <Layout>
      <ul className="list bg-base-100 rounded-box shadow-md py-10">
            {
              employeeDetails?.map((details)=>(
                <EmployeeCard key={details?.id} details={details}/>
              ))
            }
      </ul>
    </Layout>
  );
};

const EmployeeCard = ({details}) => {

  const dispatch = useDispatch();

    return(
         <li className={`list-row ${details.highlight ? 'bg-error/15' : ''}`}>
          <div>
            <img
              className="size-10 rounded-box"
              alt={details.firstName}
              src={details.image || "https://img.daisyui.com/images/profile/demo/1@94.webp"}
            />
          </div>
          <div>
            <div>{details.firstName} {details.lastName}</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              {details.email}
            </div>
          </div>
          <p className="list-col-wrap text-xs">
                  {
    typeof details.address === 'object' && details.address !== null
      ? [details.address.address, details.address.city, details.address.state]
          .filter(Boolean) // Undefined, null ya empty strings ko hata dega
          .join(', ') || "No address provided"
      : details.address || "No address provided"
  }
          </p>
          <button className="btn btn-square btn-ghost" onClick={()=>dispatch(openEmployeePopup())}>
           <CiEdit />
          </button>
          <button className="btn btn-square btn-ghost" onClick={() => dispatch(toggleHighlight(details.id))}>
            <svg
              aria-label="Favorite"
              className={`size-[1.2em] ${details.highlight ? 'text-red-500 fill-red-500' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill={details.highlight ? "currentColor" : "none"}
                stroke="currentColor"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </g>
            </svg>
          </button>
          <button className="btn btn-square btn-ghost" onClick={()=>dispatch(openDeletePopup(details.id))}>
            <MdDeleteForever />
          </button>
        </li>
    )

}
export default Employees;
