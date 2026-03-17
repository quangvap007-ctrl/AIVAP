
export function loadGoogleScript() {
  return new Promise((resolve) => {
    const script = document.createElement("script")
    script.src = "https://accounts.google.com/gsi/client"
    script.async = true
    script.onload = resolve
    document.body.appendChild(script)
  })
}
