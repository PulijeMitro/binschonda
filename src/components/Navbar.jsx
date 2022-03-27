import logo from '../images/binschonda-logo_startseite.png'
import { UserCircleIcon } from '@heroicons/react/outline'





export default function Navbar()
{
    return (
        <nav>

            <>



                <div className=" flex items-center justify-between h-16">

                    <img className=' h-14' src={logo}></img>


                    <div className='rounded-full bg-white w-32 h-32 flex flex-col text-center items-center absolute -right-10 -top-10 drop-shadow-lg'>
                        <div className='p-7  mt-2.5 flex flex-col text-center'>
                            < UserCircleIcon className='h-8 w-8 text-fuchsia-800 ' />

                            <div className='font-medium text-gray-600'>
                                <p className='text-xs' >MEINE</p>
                                <p className='text-xs'> DATEN</p>
                            </div>
                        </div>
                    </div>
                </div>







            </>

        </nav>
    )
}
