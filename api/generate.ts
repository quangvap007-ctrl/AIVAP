import { GoogleGenerativeAI } from "@google/generative-ai"

export default async function handler(req, res) {

if(req.method !== "POST"){
  return res.status(405).json({ error: "Method not allowed" })
}

try{

const token = req.headers.authorization?.split("Bearer ")[1]

if(!token){
  return res.status(401).json({ error: "Chưa đăng nhập Google" })
}

const { prompt } = req.body

if(!prompt){
  return res.status(400).json({ error: "Thiếu prompt" })
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash"
})

const result = await model.generateContent(prompt)
const response = await result.response
const text = response.text()

return res.status(200).json({
  success: true,
  data: text
})

}catch(err){
console.error(err)
return res.status(500).json({
  error: "Lỗi server",
  detail: err.message
})
}
}
