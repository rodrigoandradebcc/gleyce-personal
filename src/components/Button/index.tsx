import React, { ButtonHTMLAttributes } from 'react'
import CircularProgress from '../../components/CircularProgress'
import { Container, ContainerLoading, ChildrenLoading } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  heightSize?: 'small' | 'medium' | 'large' | 'big' | undefined
  fullWidth?: boolean
  outlined?: boolean
  fontSize?: number
  background?: string
  disabled?: boolean
  fontColor?: string
}

const Button: React.FC<ButtonProps> = ({
  background,
  fontSize,
  fontColor,
  disabled = false,
  children,
  heightSize,
  loading = false,
  outlined,
  fullWidth,
  ...buttonHTMLProps
}) => {
  return (
    <Container
      background={background}
      disabled={disabled}
      fontSize={fontSize}
      fontColor={fontColor}
      heightSize={heightSize}
      outlined={outlined}
      fullWidth={fullWidth}
      loading={loading}
      {...buttonHTMLProps}
    >
      {loading ? (
        <ContainerLoading>
          <CircularProgress />
          <ChildrenLoading>{children}</ChildrenLoading>
        </ContainerLoading>
      ) : (
        children
      )}
    </Container>
  )
}

export default Button
