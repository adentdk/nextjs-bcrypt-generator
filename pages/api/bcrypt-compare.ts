// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as bcrypt from 'bcrypt'
import * as response from "../../src/api-lib/responses"

interface ResponseData {
  data: string
}

const postHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const {data, hash} = req.body

  const isValid = bcrypt.compareSync(data, hash)

  if (isValid) {
    response.ok(res, ['data', isValid])
  } else {
    response.badRequest(res, [
      {
        message: 'not valid'
      }
    ])
  }

}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {

  switch (req.method) {
    case 'POST':
      postHandler(req, res)
      break
  
    default:
      response.methodNotAllowed(res)
      break
  }

}
