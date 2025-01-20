//import Login from '@/app/components/Login'
import { getSession } from '@/app/lib/auth'

export default async function Dashboard() {
  const session = await getSession()
  return (
    
    <main>
        <pre>{JSON.stringify(session, null, 2)}</pre>
        <h1>Protected Dashboard</h1>
    </main>
  )
}
