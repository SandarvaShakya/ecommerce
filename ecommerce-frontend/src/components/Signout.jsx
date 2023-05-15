import { signOut } from "firebase/auth"
import { firebaseAuth } from "../services/fire"

const Signout = () => {
  const logout= () => {
    signOut(firebaseAuth)
  }

  return (
    <div onClick={logout}>Signout</div>
  )
}

export default Signout