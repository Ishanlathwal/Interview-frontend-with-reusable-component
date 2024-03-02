/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";
import DialogBox from "./DialogBox";

const Component = ({
  getDataQuery,
  createDataMutation,
  componentDataKey,
  componentName,
  updateDataHitCountKey,
  createDataHitCountKey,
  getCountsQuery,
}) => {
  const { data, isLoading, isError, error } = getDataQuery();
  const { [componentDataKey]: componentData = [] } = data || [];

  const [addData, { isSuccess }] = createDataMutation();

  const { data: countData } = getCountsQuery();
  const {
    [updateDataHitCountKey]: updateDataHitCount = 0,
    [createDataHitCountKey]: createDataHitCount = 0,
  } = countData || {};

  const [componentDataValue, setComponentDataValue] = useState("");
  const [open, setOpen] = useState(false);

  const toggleDialog = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const addDataButton = (e) => {
    e.preventDefault();
    if (componentDataValue.trim() === "") {
      toast.error("Please enter a valid value");
      return;
    }
    const data = {
      [componentDataKey]: componentDataValue,
    };

    addData(data);
    setComponentDataValue("");
  };

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
    if (isSuccess) {
      toast.success("Data added successfully");
    }
  }, [error?.data?.message, isError, isSuccess]);

  if (isLoading) return <Loader />;
  return (
    <>
      {componentData &&
        componentData.map((d) => {
          return (
            <div key={d._id}>
              <h5>{d[componentDataKey]}</h5>
              <button className="btn" onClick={toggleDialog}>
                Update Data
              </button>
              <DialogBox
                data={d}
                open={open}
                submitReviewToggle={toggleDialog}
                componentName={componentName}
                id={d._id}
              />
            </div>
          );
        })}
      <input
        type="text"
        value={componentDataValue}
        onChange={(e) => setComponentDataValue(e.target.value)}
        className="input"
        placeholder={`Component ${componentName} Data`}
        required
      />
      <button className="btn" onClick={addDataButton}>
        Add Data
      </button>
      <p>
        Add Api Hit {createDataHitCount} /
        <span> Update Api Hit {updateDataHitCount}</span>
      </p>
      <p>Total Api Hit count = {createDataHitCount + updateDataHitCount}</p>
    </>
  );
};

export default Component;
