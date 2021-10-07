import { NextApiResponse } from "next"
import {StatusCodes, ReasonPhrases} from 'http-status-codes'

export const methodNotAllowed = (res: NextApiResponse) => res.status(StatusCodes.METHOD_NOT_ALLOWED).send({
  message: ReasonPhrases.METHOD_NOT_ALLOWED
})

export const badRequest = (res: NextApiResponse, errors: any[] = []) => res.status(StatusCodes.BAD_REQUEST).send({
  message: ReasonPhrases.BAD_REQUEST,
  errors
})