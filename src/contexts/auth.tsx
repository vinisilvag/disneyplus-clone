import { ReactNode, createContext, useState, useEffect } from 'react'

import { useRouter } from 'next/router'

import { setCookie, destroyCookie } from 'nookies'

import { auth } from '../services/firebase'

type User = {
  id: string
  name: string
  email: string
}

type SignInCredentials = {
  email: string
  password: string
}

type AuthContextType = {
  user: User | undefined
  isAuthenticated: boolean
  signIn: (data: SignInCredentials) => Promise<void>
  signOut: () => Promise<void>
}

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export const AuthProvider = ({ children }: AuthContextProviderProps) => {
  const router = useRouter()
  const [user, setUser] = useState<User>()

  const isAuthenticated = !!user

  useEffect(() => {
    return auth.onIdTokenChanged(async user => {
      if (user) {
        const token = await user.getIdToken()

        setCookie(undefined, 'disneyplus-clone.token', token, { path: '/' })

        setUser({
          id: user.uid,
          name: user.displayName,
          email: user.email
        })
      } else {
        destroyCookie(undefined, 'disneyplus-clone.token', { path: '/' })
        setUser({} as User)
      }
    })
  }, [])

  useEffect(() => {
    const handle = setInterval(async () => {
      const user = auth.currentUser
      if (user) await user.getIdToken(true)
    }, 10 * 60 * 1000)

    // clean up setInterval
    return () => clearInterval(handle)
  }, [])

  const signIn = async ({ email, password }: SignInCredentials) => {
    const { user } = await auth.signInWithEmailAndPassword(email, password)

    if (user) {
      setUser({
        id: user.uid,
        name: user.displayName,
        email: user.email
      })
    }
  }

  const signOut = async () => {
    await auth.signOut()

    router.push('/')
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
