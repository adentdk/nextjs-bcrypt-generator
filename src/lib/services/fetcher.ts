import { StatusCodes } from "http-status-codes"

type fetcherArgs = [string, any]

// eslint-disable-next-line import/prefer-default-export
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
      reject(error)
    })
  })
}
