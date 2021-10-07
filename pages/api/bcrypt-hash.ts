// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as bcrypt from 'bcrypt'
import * as response from "../../src/api-lib/responses"

interface ResponseData {
  data: string
}

const postHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const {data, saltRound} = req.body

  const salt = bcrypt.genSaltSync(Number(saltRound))

  const hashedData = bcrypt.hashSync(data, salt)

  response.ok(res, ['data', hashedData])
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
