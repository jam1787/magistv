import { ConfirmationError } from "@/app/(auth)/confirmation/ConfirmaitonError";

export function StrapiErrors({ error }) {
  if (!error?.message) return null;
  console.log(error)
  return <div className="text-red-500 text-md mb-4 text-center text-pretty">
    {error.message === 'Your account email is not confirmed' 
      ? <ConfirmationError /> 
      : error.message
    }
  </div>
}