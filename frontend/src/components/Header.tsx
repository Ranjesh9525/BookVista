import { Link } from "react-router-dom"
import { useAppContext } from "../contexts/AppContext"
import SignOutButton from "./SignOutButton"

const Header = () => {
  const { isLoggedIn } = useAppContext()

  return (
    <div className="bg-gradient-to-r from-green-500 to-orange-500 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="BookVista Logo" className="h-12 w-12" />
            <span className="text-3xl text-white font-bold tracking-tight">BookVista</span>
          </Link>
        </div>
        <div className="flex space-x-4 items-center">
          {isLoggedIn ? (
            <>
              <Link className="text-white px-3 py-2 rounded-md hover:bg-white/10 transition-colors" to="/my-bookings">
                My Bookings
              </Link>
              <Link className="text-white px-3 py-2 rounded-md hover:bg-white/10 transition-colors" to="/my-hotels">
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="bg-white text-orange-500 px-6 py-2 rounded-md font-semibold hover:bg-orange-100 transition-colors"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header

