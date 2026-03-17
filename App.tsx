
import { useState } from "react"
import { auth, provider } from "./firebase"
import { signInWithPopup, signOut } from "firebase/auth"

export default function App(){

const [prompt,setPrompt] = useState("")
const [result,setResult] = useState("")
const [user,setUser] = useState<any>(null)

const login = async ()=>{
  const res = await signInWithPopup(auth,provider)
  setUser(res.user)
}

const logout = async ()=>{
  await signOut(auth)
  setUser(null)
}

const runAI = async ()=>{

if(!user){
  alert("Bạn cần đăng nhập Google trước!")
  return
}

const token = await user.getIdToken()

const r = await fetch("/api/generate",{
method:"POST",
headers:{
  "Content-Type":"application/json",
  "Authorization":`Bearer ${token}`
},
body:JSON.stringify({prompt})
})

const data = await r.json()

setResult(JSON.stringify(data,null,2))

}

return (

<div style={{fontFamily:"sans-serif",padding:40}}>

<h1>AIVAP PRO V3</h1>

<p>AI Architecture + Urban Planning Tools</p>

<div style={{
  position: "fixed",
  top: 20,
  right: 20,
  zIndex: 9999
}}>
  {user ? (
    <div style={{
      background: "#111",
      color: "#fff",
      padding: "8px 12px",
      borderRadius: 8
    }}>
      <span style={{ marginRight: 10 }}>
        {user.displayName}
      </span>
    </div>
  ) : (
    <button onClick={login}>
      Đăng nhập Google
    </button>
  )}
</div>
) : (
  <button onClick={login}>Đăng nhập Google</button>
)}

<br/><br/>

<textarea
style={{width:"100%",height:100}}
placeholder="Nhập prompt kiến trúc hoặc quy hoạch..."
value={prompt}
onChange={e=>setPrompt(e.target.value)}
/>

<br/><br/>

<button onClick={runAI}>
Generate AI
</button>

<pre>{result}</pre>

</div>

)

}
