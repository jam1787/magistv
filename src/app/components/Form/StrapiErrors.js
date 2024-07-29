import { ConfirmationError } from "@/app/(auth)/confirmation/ConfirmaitonError";

const ErrorWrapper = ({ children }) =>
  <div className="text-red-500 text-md mt-3 text-center text-balance">
    {children}
  </div>

export function StrapiErrors({ error }) {
  if (!error?.message) return null

  if (error.message === 'Your account email is not confirmed')
    return (
      <ErrorWrapper>
        <ConfirmationError />
      </ErrorWrapper>
    )

  if (error.message === 'Invalid identifier or password')
    return (
      <ErrorWrapper>
        El identificador o la contraseña son inválidos
      </ErrorWrapper>
    )

  return <ErrorWrapper>{error.message}</ErrorWrapper>
}