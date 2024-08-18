import React from 'react'
import { AuthTemplate } from '@/components/auth/AuthTemplate'
import { AuroraBackground } from '@/components/ui/aurora-background'

function SignUp() {
    return (
        <AuroraBackground>
            <AuthTemplate title="signup" submit="handleSignup" />
        </AuroraBackground>
    )
}

export default SignUp