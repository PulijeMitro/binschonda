
import Dropdown from "./Dropdown";
import Textinput from "./Textinput";
import { PlusCircleIcon } from "@heroicons/react/outline";
import React from "react";
export default function Modal()
{

    const [showModal, setShowModal] = React.useState(false);

    return (
        <>
            <button><PlusCircleIcon
                className=" w-5 h-5 mt-1.5 transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >

            </PlusCircleIcon></button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-gray-500 font-normal  "
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-lg rrounded-md ">

                            <div className="shadow-lg relative rounded-md flex flex-col w-full bg-slate-100  outline-none focus:outline-none border-2 border-white  m-2 p-2">
                                <div className="text-lg">Neuen Eintrag hinzufuhen</div>
                                <div className="ml-3">




                                    <br />
                                    <Dropdown />
                                    <br />
                                    <Textinput
                                        label1="Start:"
                                        label2="Ende:"

                                    />
                                    <br /> </div>



                                <button
                                    className="rounded-lg bg-fuchsia-900 text-white px-6 py-2 text-sm font-semibold outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button" id="button1"
                                    onClick={() => setShowModal(false)}
                                >
                                    Speichern
                                </button>
                                <button
                                    className="rounded-lg bg-white text-fuchsia-900 text-sm px-6 py-2 font-semibold  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Abbrechen
                                </button>

                            </div>
                        </div>
                    </div>

                </>
            ) : null}
        </>
    );





}