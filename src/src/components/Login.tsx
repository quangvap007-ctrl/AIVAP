
import { useEffect } from "react"
import { loadGoogleScript } from "../services/googleAuth"
import { useAuth } from "../contexts/AuthContext"

export default function Login() {
  const { setUser } = useAuth()

  useEffect(() => {
    loadGoogleScript().then(() => {
      // @ts-ignore
      google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse
      })

      // @ts-ignore
      google.accounts.id.renderButton(
        document.getElementById("googleBtn"),
        { theme: "outline", size: "large" }
      )
    })
  }, [])

  function handleCredentialResponse(response: any) {
    const payload = JSON.parse(atob(response.credential.split(".")[1]))
    setUser(payload)
  }

  return <div id="googleBtn"></div>
}
