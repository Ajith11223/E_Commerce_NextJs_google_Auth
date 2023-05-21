import Nav from "@/components/navbar"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Layout({children}) {

  const { data: session } = useSession()

  if(!session){
    return(
      <div className="bg-blue-900 w-screen h-screen flex items-center">
      <div className="text-center w-full ">
  
      <button onClick={() => signIn("google")} className="bg-white p-2 rounded-lg px-4">Login with google</button>
      </div>
     </div>
    )
  }
  return (
 <>
 <div className="bg-blue-900 min-h-screen flex">
  <Nav/>

 <div className="bg-white flex-grow mt-2 mr-2 rounded-lg p-4 mb-3">Logged In {children}</div>
 <button onClick={() => signOut()}>Sign out</button>
 </div>
 </>
  )
}