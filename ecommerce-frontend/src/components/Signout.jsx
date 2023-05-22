import '../styles/Signout.css'
import { signOut } from "firebase/auth"
import { firebaseAuth } from "../services/fire"

const Signout = ({className}) => {
  const logout= () => {
    signOut(firebaseAuth)
  }

  return (
    <li className={className} onClick={logout}>Signout</li>
  )
}

export default Signout