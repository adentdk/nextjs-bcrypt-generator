import { StatusCodes } from "http-status-codes"
import {resolveErrorMessage} from "@lib"

type fetcherArgs = [string, any]

export function fetcher<Rs> (...args: fetcherArgs) {
  return new Promise<Rs | null>((resolve, reject) => {
    fetch(...args).then(response => {
      if (response.ok) {
        if (response.status === StatusCodes.NO_CONTENT) {
          resolve(null)
        } else {
          return response.json()
        }
      } else {
        throw response
      }

      return undefined
    }).then(jsonData => {
      resolve(jsonData)
    }).catch(error => {
      const errorMessage = resolveErrorMessage(error)
      reject(errorMessage)
    })
  })
}

export default fetcher