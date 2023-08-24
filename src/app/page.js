"use client";

import Header from "./components/header";
import Logo from "./components/logo";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");
  const colors = ["#F7C871", "#ED9871", "#B592FD", "#68D6FE", "#E3EE8E"];

  const addNote = () => {
    setNotes([
      ...notes,
      {
        note: "",
        color: "#F7C871",
        is_pinned: false,
        created_at: Date.now(),
        id: Math.floor(Math.random() * 100),
      },
    ]);
    notes.reverse();
    console.log(notes);
  };

  const updateNote = (index) => {
    if (note.length !== 0 || note !== "") {
      const cloneList = [...notes];
      cloneList[index]["note"] = note;
      setNotes(cloneList);
      setNote("");
      toast.success("Successfully Added!")
    }else{
      toast.error("Please Write Something!")
    }
  };

  const deleteNote = (index) => {
    const cloneNotes = [...notes];
    cloneNotes.splice(index, 1);
    setNotes(cloneNotes);
    setNote("");
    toast.warning("You Have delete Something!")
  };

  const handleColorChange = (color) => {
    if (notes.length > 0) {
      const lastIndex = notes.length - 1;
      const cloneList = [...notes]; // 1 level clone
      cloneList[lastIndex]["color"] = color;
      setNotes(cloneList);
    }else{
      toast.error("No Data Found!")
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setNote(value);
  };

  return (
    <>
      <Header
        addNote={addNote}
        handleColorChange={handleColorChange}
        colors={colors}
      />
      <Logo />
      <main className="mr-5 ml-20 md:ml-40 lg:ml-52 mt-6 md:mr-10 lg:mr-20">
      <p className="text-3xl font">Hello bhai</p>
        <div className="grid md:grid-cols-6 lg:grid-cols-12 lg:gap-10 gap-5">
          {notes?.length === 0 ? (
            <div className="col-span-6 h-[600px] md:h-[600px] lg:h-[600px] md:col-span-12">
              <div className="flex h-full items-center justify-center flex-col">
                <img
                  src="/images/check.png"
                  width={50}
                  height={50}
                  alt="empty"
                />
                <q className="mt-2">
                  {" "}
                  No <span className="text-red-500 font-semibold">
                    Notes
                  </span>{" "}
                  yet found!{" "}
                </q>
              </div>
            </div>
          ) : (
            notes?.map((dataNote, index) => {
              return (
                <div key={dataNote.id} className="md:col-span-3 lg:col-span-4">
                  <div
                    style={{ backgroundColor: dataNote.color }}
                    className={`p-3 md:p-5 bg-[${dataNote.color}] h-[220px] md:h-[300px] rounded-2xl shadow-lg`}
                  >
                    {dataNote.note.length === 0 || dataNote.note === "" ? (
                      <textarea
                        value={note}
                        className="h-[140px] max-h-[140px] md:h-[210px] md:max-h-[210px] w-full overflow-auto mb-4 bg-transparent outline-none"
                        placeholder="Write Something"
                        name="note"
                        onChange={handleChange}
                        autoFocus
                      />
                    ) : (
                      <p className="h-[150px] max-h-[150px] md:h-[210px] md:max-h-[210px] text-sm md:text-base overflow-auto mb-2 md:mb-4">
                        {dataNote.note}
                      </p>
                    )}
                    <div className="flex justify-between items-center">
                      <button
                        onClick={() => deleteNote(index)}
                        className="border-[1px] border-red-600 rounded-full h-[35px] w-[35px] flex justify-center items-center"
                      >
                        <i className="fa-solid fa-trash-can text-red-600"></i>
                      </button>
                      <p className="font-medium md:text-base text-sm">
                        {dataNote.created_at}
                      </p>
                      {dataNote.note.length === 0 || dataNote.note === "" ? (
                        <button
                          onClick={() => updateNote(index)}
                          className="bg-black text-white rounded-md px-2 py-1 md:px-3 md:py-2 text-sm font-semibold flex items-center gap-2"
                        >
                          <i className="fa-solid fa-check"></i>
                          <span>Submit</span>
                        </button>
                      ) : (
                        <button className="bg-black rounded-full h-[35px] w-[35px] flex justify-center items-center">
                          <i className="fa-solid fa-star text-yellow-600"></i>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <ToastContainer />
      </main>
    </>
  );
}
