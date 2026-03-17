
import { useState } from "react"
import { generateText } from "../services/gemini"

export default function Generator() {

  const [prompt,setPrompt] = useState("")
  const [result,setResult] = useState("")

  async function run(){

    const text = await generateText(prompt)
    setResult(text)

  }

  return (

  <div style={{marginTop:20}}>

    <textarea
      value={prompt}
      onChange={(e)=>setPrompt(e.target.value)}
      placeholder="Nhập prompt..."
      style={{width:"100%",height:120}}
    />

    <button onClick={run} style={{marginTop:10}}>
      Generate
    </button>

    <pre style={{marginTop:20,whiteSpace:"pre-wrap"}}>
      {result}
    </pre>

  </div>

  )

}
