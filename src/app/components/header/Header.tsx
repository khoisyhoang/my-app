import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';

export default function Header() {

    return (
        <header className="shadow-md bg-[#98C1D9]">
            <div className="flex justify-between items-center w-[1280px] mx-auto gap-[60px] p-3">
                <h1 className="text-sm sm:text-xl flex items-center">
                    <HomeIcon />
                    <div>Estate</div>
                </h1>
                <form action="" className="flex gap-[10px] flex-1">
                    <input type="text" placeholder="Search..." className='bg-[#212121] rounded-[50px] px-[10px] py-[3px] flex-1' />
                    <button type="submit" className="border-white border-2 rounded-[10px] p-1">Search</button>
                </form>
                <ul className="flex justify-center items-center gap-[30px]">
                    <li>
                        <Link href={"/"}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={"/about"}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href={"/login"}>
                            Sign In
                        </Link>
                    </li>


                </ul>
            </div>


        </header>
    );
}
