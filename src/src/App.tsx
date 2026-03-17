
import Login from "./components/Login"
import Generator from "./components/Generator"
import { useAuth } from "./contexts/AuthContext"

export default function App(){

  const {user} = useAuth()

  return (

  <div style={{maxWidth:800,margin:"40px auto",fontFamily:"sans-serif"}}>

    <h1>AIVAP APP</h1>

    {!user && <Login/>}

    {user && (

      <div>

        <p>Xin chào {user.email}</p>

        <Generator/>

      </div>

    )}

  </div>

  )

}
