import { ButtonHTMLAttributes } from 'react'

import { CustomButton } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean
  isOutlined?: boolean
}

export const Button = ({
  isLoading = false,
  isOutlined,
  children,
  ...props
}: ButtonProps) => {
  return (
    <CustomButton disabled={isLoading} outlined={isOutlined} {...props}>
      {isLoading ? 'Loading...' : children}
    </CustomButton>
  )
}
