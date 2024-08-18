import React from 'react'
import { AuthTemplate } from '@/components/auth/AuthTemplate'

function SignUp() {
    return (
    <AuthTemplate title="signup" submit="handleSignup" />
    )
}

export default SignUp