
export function resolveErrorMessage(error: unknown) {
  const errorObj = error as Error

  console.log(error)
  if (errorObj.message) {
    return errorObj.message
  }

  return null
}

export default resolveErrorMessage