
export function resolveErrorMessage(error: unknown) {
  const errorObj = error as Error

  if (errorObj === null) {
    return 'Something went wrong'
  }

  if (errorObj.message) {
    return errorObj.message
  }

  return 'Something went wrong'
}

export default resolveErrorMessage