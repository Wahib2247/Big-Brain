import { AuthTemplate } from '@/components/auth/AuthTemplate'
import { AuroraBackground } from '@/components/ui/aurora-background'
import React from 'react'

function Login() {
  return (
    <AuroraBackground>
      <AuthTemplate title="login" submit="handleLogin" />
    </AuroraBackground>
  )
}
export default Login