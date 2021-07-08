import {
  InputHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction
} from 'react'
import { FieldError } from 'react-hook-form'

import { Container, CustomInput, ErrorMessage } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { error, ...rest },
  ref
) => {
  return (
    <Container>
      <CustomInput ref={ref} error={!!error} {...rest} />

      {!!error && <ErrorMessage>{error.message}</ErrorMessage>}
    </Container>
  )
}

export const Input = forwardRef(InputBase)
