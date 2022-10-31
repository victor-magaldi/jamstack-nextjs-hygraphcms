import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log('req', req.statusCode)
  res.status(200).json({ name: 'John Doe' })
}
