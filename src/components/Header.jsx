import { ChevronDownIcon } from '@heroicons/react/outline'


export default function Header()
{
    const current = new Date();
    const date = `${current.getDate()}.${current.getMonth() + 1}.${current.getFullYear()}`;
    return (
        <div className="mx-3.5 text-gray-700">
            <p className="text-base ">Meine Aufgaben fur </p>
            <div className='flex '><p className="text-2xl"> Heute, {date}</p> <ChevronDownIcon className='w-5 h-5 mt-1.5' /></div>
            <p className="text-base">Mit dem Auto  <span className="font-bold">Miiu B130409 </span></p>
        </div>
    )
} 
