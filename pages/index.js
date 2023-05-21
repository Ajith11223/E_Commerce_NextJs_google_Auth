import Layout from "@/components/layout";
import { useSession ,signOut} from "next-auth/react";


export default function Home() {
  const {data:session} =useSession()
  // if(!session) return;

return <Layout>
  <div className="text-blue-900 flex justify-between">
    <h2>Hello,<b>{session?.user?.name}</b></h2>
    <div className="flex bg-gray-300 text-black flex-col  gap-1 rounded-lg overflow-hidden">
    {session?.user?.name}

 <img src={session?.user?.image} alt="" className="w-6 h-6"/>
 <button onClick={() => signOut()}>Sign out</button>
 
 
    </div>

 
  </div>
</Layout>
}
