
import Card from './Card';
import { RefreshIcon } from "@heroicons/react/outline";
import Modal from './Modal';
import Pause from './Pause';

export default function Timeline({ showPause })
{

    return (
        <ol class="relative border-l border-black dark:border-gray-700 ml-2  timeline leading-6 p-0 w-full ">
            <li class="mb-2 ml-4 timeline-content">
                <time className="absolute bg-slate-100 mt-1.5 -left-1.5 mb-1 text-sm font-normal timeline-title text-gray-400 dark:text-gray-500  m-0">07:00</time>

                <Card
                    cardService="Gartenservice"
                    cardHeading="Start 06:50 &nbsp; Dauer 3h 00m"
                    cardIcon={<RefreshIcon className="w-3 h-3 mt-1.5 " />}
                    cardHeading2="2 Wochen"
                    cardTitle="Klienta Anspruchsvoll"
                    cardLocation="3.Stock,Treskowallee 121,"
                    cardTitleContent="Notizen"
                    cardContent="Kunde hort nicht gut,eventuell doppelt klingeln."
                    cardButton1="Kommentare"
                    cardButton2="Leistungserfassung"
                />

                <time className="absolute mt-1.5 top-44 bg-fuchsia-800 -left-1.5 mb-1 text-sm font-normal timeline-title text-white dark:text-gray-500  m-0">08:48</time>
            </li>
            <li class="mb-2 ml-4 timeline-content">
                <time className="absolute bg-slate-100 mt-1.5 -left-1.5 mb-1 text-sm font-normal timeline-title dark:text-gray-500 pr-3 m-0"><Modal /> </time>
                <br />

            </li>
            <div className=''>
                <li className='mb-2 ml-4 timeline-content'> <Pause />

                </li>
            </div>
            <li class="ml-4 timeline-content mb-2">

                <time className="absolute  bg-slate-100 mt-1.5 -left-1.5  text-sm font-normal timeline-title text-gray-400 dark:text-gray-500">10:30</time>

                <Card
                    cardService="Gartenservice"
                    cardStatus="privat"
                    cardHeading="Start 06:50 &nbsp; Dauer 3h 00m"
                    cardIcon={<RefreshIcon className="w-3 h-3 mt-1.5 " />}
                    cardHeading2="2 Wochen"
                    cardTitle="Karl Kraus"
                    cardLocation="3.Stock,Schonauerallee 121,"
                    cardTitle_content="Notizen"
                    cardContent="Kunde muss um 14:00 weg."
                    cardButton1="Kommentare"
                    cardButton2="Leistungferfassung"
                    cardMessage="Vertrag & Verhinderungspflege info fehlen!"
                />
            </li>
        </ol >
    );
}