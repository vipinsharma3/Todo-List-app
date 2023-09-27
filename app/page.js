"use client";
import React, {useState} from "react";

const page = () => {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const submitForm = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, {task, desc}]);
    setTask("");
    setDesc("");
  };
  const deleteHandle = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask)
  };
  let renderTask = <h2 className="text-gray-800 text-lg ">No Task Available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex text-center justify-between mb-5">
          <div className="flex justify-between mb-5 text-2xl font-semibold w-2/3">
            <h2>{t.task}</h2>
            <h3 className="text-lg font-medium ">{t.desc}</h3>
          </div>
          <button
            onClick={() => {
              deleteHandle(i);
            }}
            className="text-white px-4 py-2 rounded font-bold bg-red-400"
          >
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-white text-5xl font-bold text-center p-6 ">
        My Todo List
      </h1>
      <form onSubmit={submitForm}>
        <input
          type="text"
          className="border-black text-2xl border-4 rounded m-8 px-4 py-2 "
          placeholder="Enter Task here"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <input
          type="text"
          className="border-black text-2xl border-4 rounded m-8 px-4 py-2"
          placeholder="Enter Description here"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button className="bg-black rounded text-white font-bold text-2xl px-5 py-3 m-5 ">
          Add Task
        </button>
      </form>
      <div className="bg-slate-300 p-8 mt-3">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};
export default page;
