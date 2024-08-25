import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useEffect } from "react";
import CircleStackIcon from '@heroicons/react/24/outline/CircleStackIcon';
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { openModal } from "../modalSlice";
import { MODAL_BODY_TYPES } from "@/helper/app-constants";
import { setLoggedIn } from "@/features/user/userSlice";

function NavProfileLinks() {
    const dispatch = useAppDispatch();
    const { name, emailId, isLoggedIn } = useAppSelector((state) => state.user);


    useEffect(() => {
        if (isLoggedIn) {
            // dispatch(fetchUserDe());
        }
    }, []);

    const openLoginModal = () => {
        console.log("here")
        dispatch(openModal({ title: "", size: "lg", bodyType: MODAL_BODY_TYPES.SIGN_IN_MODAL, extraObject: { isSignIn: true } }));
    };


    const logoutUser = async () => {
        // await axios.get(process.env.NEXT_PUBLIC_BASE_URL+'/user/logout')
        localStorage.clear();
        dispatch(setLoggedIn(false));
        window.location.href = '/'; // Use window.location.href instead of assigning to window.location directly
    };

    const handleDropDownClick = () => {
        const elem = document.activeElement as HTMLElement | null;
        if (elem) {
            elem.blur();
        }
    };

    return (
        <>
            {isLoggedIn && (
                <>
                   
                   
                    <div className="dropdown  md:mt-0 mt-4 ml-6 dropdown-end">
                        <label tabIndex={0} className="btn md:hidden btn-sm normal-case btn-outline m-1">Account</label>

                        <label tabIndex={0} className="btn bg-white md:flex hidden btn-circle  avatar">
                            <div className="w-6 rounded-full">
                                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact z-20 dropdown-content bg-slate-50 mt-3 p-2 shadow rounded-box w-52">
                            <li className="justify-between" onClick={() => handleDropDownClick()}>
                                <Link href={'/account/my-profile'}>
                                    <a>My Profile</a>
                                </Link>
                            </li>

                            <li className="justify-between" onClick={() => handleDropDownClick()}>
                                <Link href={'/account/saved-websites'}>
                                    <a>My Websites</a>
                                </Link>
                            </li>

                            <div className="divider mt-0 mb-0"></div>
                            <li><a onClick={logoutUser}>Logout</a></li>
                        </ul>
                    </div>
                </>
            )}
            {!isLoggedIn && (
                <>
                    <button className='btn btn-sm text-xs mr-4 normal-case md:btn-ghost ' onClick={() => openLoginModal()}>Sign In</button>
                    <Link href="/start-designing"><button className='btn md:mt-0 mt-4 btn-block btn-sm text-xs btn-outline normal-case hover:text-white hover:btn-primary'>Get Started</button></Link>
                </>
            )}
        </>
    );
}

export default NavProfileLinks;
