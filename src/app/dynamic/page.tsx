import { headers } from "next/headers";
import { userAgent } from "next/server";

export default function DynamicPage() {
  const {browser, os} =  userAgent({headers: headers()})
    
  return <>
  <p>Hellow DYNAMIC world!</p>
  <pre>
    Browser: {browser.name || 'Unknown'} {browser.version || ''}<br/>
    OS: {os.name || 'Unknown'} {os.version || ''}
  </pre>
  </>
}
