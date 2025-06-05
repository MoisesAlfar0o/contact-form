import { useForm } from "react-hook-form"

interface FormValues {
  name: string,
  lastName: string,
  email: string,
  type: 'general' | 'support' ,
  message: string,
  agree: boolean
}

export function useFormValidation () {
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } =useForm<FormValues>()

  return { register, handleSubmit, errors, reset }
}