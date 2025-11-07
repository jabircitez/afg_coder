import type { NextApiRequest, NextApiResponse } from 'next'
import multer from 'multer'

const upload = multer({ dest: '/tmp/uploads' })
export const config = { api: { bodyParser: false } }

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  upload.array('files')(req as any, res as any, (err: any) => {
    if (err) return res.status(500).json({ error: err.message })
    const files = (req as any).files || []
    const projectId = 'p_' + Date.now()
    // TODO: save metadata to DB, upload files to storage, enqueue job to Redis
    return res.status(200).json({ projectId })
  })
}
