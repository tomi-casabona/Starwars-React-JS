import { NavLink } from "react-router-dom"

export const NavBar = () => {
    return (
        <div className="flex justify-center items-center p-0 border-b-[1px] border-t-[1px] border-gray-500">
            <NavLink to="/" className={({ isActive }) => `hover:text-white uppercase py-2 px-4 border-e border-s border-b border-gray-500 ${isActive ? 'border-b-blue-500 border' : 'border-b-transparent'}`}>Home</NavLink>
            <NavLink to="/loggedIn" className={({ isActive }) => `hover:text-white uppercase py-2 px-4 border-e border-s border-b border-gray-500 ${isActive ? 'border-b-blue-500 border' : 'border-b-transparent'}`}>Starships</NavLink>
        </div>
    )
}
