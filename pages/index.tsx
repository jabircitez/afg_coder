import { useState } from 'react'

export default function Home() {
  const [files, setFiles] = useState<FileList | null>(null)
  const [message, setMessage] = useState('')
  async function upload() {
    if (!files || files.length === 0) return setMessage('فایلی انتخاب نشده')
    const fd = new FormData()
    for (const f of Array.from(files)) fd.append('files', f)
    const res = await fetch('/api/upload', { method: 'POST', body: fd })
    const data = await res.json()
    if (res.ok) setMessage('پروژه ارسال شد، پس از پردازش لینک اشتراک گذاشته می‌شود: ' + data.projectId)
    else setMessage('خطا: ' + (data.error || 'unknown'))
  }
  return (
    <main style={{ maxWidth: 800, margin: '2rem auto', fontFamily: 'sans-serif', direction: 'rtl' }}>
      <h1>AFG CODER — بارگذاری پروژه</h1>
      <p>آپلود فایل‌ها (index.html, script.js, style.css و غیره) یا zip</p>
      <input type="file" multiple onChange={(e) => setFiles(e.target.files)} />
      <br />
      <button onClick={upload} style={{ marginTop: 12 }}>بارگذاری و راه‌اندازی</button>
      <p>{message}</p>
    </main>
  )
}
