
import { PencilAltIcon } from "@heroicons/react/solid";
import { LocationMarkerIcon } from "@heroicons/react/outline";
export default function Card({ cardHeading2, cardIcon, cardButton1, cardButton2, cardContent, cardHeading, cardLocation, cardMessage, cardService, cardStatus, cardTitle, cardTitleContent })
{
    return (
        <div>
            <div className="flex justify-end ">

                {cardStatus && <div className="text-white rounded-md box-content bg-teal-600 mx-2" >  <span className="px-3">{cardStatus}</span></div>}
                {cardService && <div className=" text-white rounded-md  bg-fuchsia-800  box-content   mx-2 "><span className="px-3">{cardService}</span></div>}
            </div>
            <div className="bg-slate-100 border-2 border-fuchsia-800 rounded-md  mx-3 p-2 text-gray-700 ">

                <div className="flex text-sm">  {cardHeading} &nbsp;  <span className="px-1">{cardIcon}</span> {cardHeading2}</div>


                <br />



                <div className="flex justify-between ">
                    <span className="text-xl font-bold text-black">{cardTitle}</span> <PencilAltIcon className="w-5 h-5 mt-1.5" />
                </div>

                <br />

                <div className=" rounded-md   border-inherit bg-white text-gray-700 " >
                    <div className="flex ml-2">  <LocationMarkerIcon className="w-4 h-4 mt-1.5" /> &nbsp;  {cardLocation}</div><p className="ml-6">13108 Berlin</p>
                </div>
                <br />
                <div>
                    <p className="text-xs">{cardTitleContent}</p>
                    <p>{cardContent}</p>
                </div>
                <br />
                <div>
                    <p className="bg-red-600 text-white text-sm px-2">{cardMessage}</p>
                </div>
                <div className="flex justify-between bg-white  rounded-md h-10 ">
                    <button className="text-sky-400 ml-1 py-2 px-2 font-semibold">{cardButton1}</button>
                    <button className="text-green-400 mr-1 py-2 px-2 font-semibold">{cardButton2}</button>
                </div>

            </div>
        </div >
    );
}