import { getSession, useSession } from 'next-auth/react'

export default function AdminPage() {
  const { data: session } = useSession()
  if (!session) return <p>در حال بارگذاری...</p>
  return (
    <main style={{ padding: 20 }}>
      <h1>پنل مدیریت AFG CODER</h1>
      <p>خوش آمدید، {session.user?.email}</p>
      <p>در اینجا می‌توانید کاربران، پروژه‌ها و اشتراک‌ها را مدیریت کنید.</p>
    </main>
  )
}

export async function getServerSideProps(context:any) {
  const session = await getSession(context)
  if (!session || session.user?.email !== 'jabircitez88@gmail.com') {
    return { redirect: { destination: '/unauthorized', permanent: false } }
  }
  return { props: {} }
}