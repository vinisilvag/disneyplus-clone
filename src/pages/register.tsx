import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'

import Image from 'next/image'
import Link from 'next/link'

import {
  Container,
  FormContainer,
  Title,
  Form,
  SignInButton
} from '../styles/auth.styles'

import { auth } from '../services/firebase'

import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { toast } from 'react-toastify'

import { parseCookies } from 'nookies'
import { adminAuth } from '../services/admin'

import { Input } from '../components/Input'
import { Button } from '../components/Button'

import logoImg from '../../public/images/logo.svg'
import { Footer } from '../components/Footer'

type RegisterFormData = {
  name: string
  email: string
  password: string
}

const registerFormSchema = yup.object({
  name: yup.string().required('Name is a required field'),
  email: yup
    .string()
    .required('Email is a required field')
    .email('Email must be a valid email'),
  password: yup
    .string()
    .required('Password is a required field')
    .min(6, 'Password should be at least 6 characters')
})

export default function Register() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerFormSchema)
  })

  const handleRegister: SubmitHandler<RegisterFormData> = async ({
    name,
    email,
    password
  }) => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )

      await user.updateProfile({
        displayName: name
      })

      toast.success('Account created successfully')

      router.push('/login')
    } catch (err) {
      toast.error(err.message)
    }
  }

  return (
    <>
      <Container>
        <Head>
          <title>Register | Disney+</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <SignInButton>
          <Link href="/login" passHref>
            Log in
          </Link>
        </SignInButton>

        <Link href="/" passHref>
          <Image src={logoImg} alt="Disney+" width={172} height={104} />
        </Link>

        <FormContainer>
          <Title>Register with your email</Title>

          <Form onSubmit={handleSubmit(handleRegister)}>
            <Input
              placeholder="Name"
              type="name"
              error={errors.name}
              {...register('name')}
            />

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
              SIGN UP
            </Button>
          </Form>
        </FormContainer>
      </Container>
      <Footer />
    </>
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
