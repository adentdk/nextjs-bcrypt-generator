import { ReasonPhrases, StatusCodes } from "http-status-codes"
import { NextApiResponse } from "next"
import { Args } from "./interfaces"

const getResData = (args: Args) => {
  const resData: any = {}

  args.forEach(arg => {
    const [index, value] = arg
    resData[index] = value
  })

  return resData
}

export const ok = (res: NextApiResponse, ...args: Args) => {
  const resData = getResData(args)

  return res.status(StatusCodes.OK).send({
    message: ReasonPhrases.OK,
    ...resData
  })}

export const created = (res: NextApiResponse, ...args: Args) => {
  const resData = getResData(args)

  return res.status(StatusCodes.CREATED).send({
    message: ReasonPhrases.CREATED,
    ...resData
  })
} 