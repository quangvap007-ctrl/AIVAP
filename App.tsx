
import { useState } from "react"

export default function App(){

const [prompt,setPrompt] = useState("")
const [result,setResult] = useState("")

const runAI = async ()=>{

const r = await fetch("/api/generate",{
method:"POST",
headers:{ "Content-Type":"application/json" },
body:JSON.stringify({prompt})
})

const data = await r.json()

setResult(JSON.stringify(data,null,2))

}

return (

<div style={{fontFamily:"sans-serif",padding:40}}>

<h1>AIVAP PRO V3</h1>

<p>AI Architecture + Urban Planning Tools</p>

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
