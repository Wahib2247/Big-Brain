import React from 'react'
import { AuthTemplate } from '@/components/auth/AuthTemplate'
import { AuroraBackground } from '@/components/ui/aurora-background'

function SignUp() {
    return (
        <AuroraBackground>
            <AuthTemplate title="signup" />
        </AuroraBackground>
    )
}

export default SignUp