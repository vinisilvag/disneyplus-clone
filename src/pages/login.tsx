import { GetServerSideProps } from 'next'
import Head from 'next/head'

import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

import { Container, FormContainer, Title, Form } from '../styles/auth.styles'

import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { toast } from 'react-toastify'

import { useAuth } from '../hooks/useAuth'

import { parseCookies } from 'nookies'
import { adminAuth } from '../services/admin'

import { Input } from '../components/Input'
import { Button } from '../components/Button'

import logoImg from '../../public/images/logo.svg'

type SignInFormData = {
  email: string
  password: string
}

const signInFormSchema = yup.object({
  email: yup
    .string()
    .required('Email is a required field')
    .email('Email must be a valid email'),
  password: yup.string().required('Password is a required field')
})

export default function Login() {
  const { signIn } = useAuth()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema)
  })

  const handleSignIn: SubmitHandler<SignInFormData> = async data => {
    try {
      await signIn(data)

      router.push('/home')
    } catch (err) {
      toast.error(err.message)
    }
  }

  return (
    <Container>
      <Head>
        <title>Login | Disney+</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/" passHref>
        <Image src={logoImg} alt="Disney+" width={172} height={104} />
      </Link>

      <FormContainer>
        <Title>Log in with your email</Title>

        <Form onSubmit={handleSubmit(handleSignIn)}>
          <Input
            placeholder="Email"
            type="email"
            error={errors.email}
            {...register('email')}
          />
          <Input
            placeholder="Password"
            type="password"
            error={errors.password}
            {...register('password')}
          />

          <Button type="submit" isLoading={isSubmitting}>
            SIGN IN
          </Button>
        </Form>
      </FormContainer>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { 'disneyplus-clone.token': token } = parseCookies(ctx)

  if (token) {
    try {
      await adminAuth.verifyIdToken(token)

      return {
        redirect: {
          destination: '/home',
          permanent: false
        }
      }
    } catch (err) {}
  }

  return {
    props: {}
  }
}