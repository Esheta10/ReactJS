import React from "react";
import {useDispatch, useSelector} from "react-redux"
import { closeDeletePopup } from "../../store/features/popup/popup.slice";
import { deleteEmployee } from "../../store/features/employee/employee.thunk";

const DeletePopup = () => {

  const dispatch = useDispatch();
  const deletePopup = useSelector(state => state.popup.deletePopup);
  const selectedEmployeeId = useSelector(state => state.popup.selectedEmployeeId);

  if(!deletePopup) return null;

  const handleDelete = () => {
    if (selectedEmployeeId) {
      dispatch(deleteEmployee(selectedEmployeeId));
    }
    dispatch(closeDeletePopup());
  };

  return (
    <div onClick={()=>dispatch(closeDeletePopup())} className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/80 z-20 mt-15">
      <div onClick={(e) => e.stopPropagation()} className="card w-96 bg-base-100 card-md shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Delete Details</h2>
          <p>
            Are you sure you want to delete?
          </p>
          <div className="flex flex-row gap-5 items-center justify-center card-actions">
           <button className="btn btn-outline btn-accent" onClick={handleDelete}>Yes</button>
           <button className="btn btn-outline btn-error" onClick={()=>dispatch(closeDeletePopup())}>No</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
