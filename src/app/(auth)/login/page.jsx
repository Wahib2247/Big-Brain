import { AuthTemplate } from '@/components/auth/AuthTemplate'
import React from 'react'

function Login() {
  return (
    <AuthTemplate title="login" submit="handleLogin" />
  )
}
export default Login