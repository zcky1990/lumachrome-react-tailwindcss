import type { FC } from 'react'
import SignInLayout from '../layout/SignInLayout'

interface Props {
    [key: string]: any;
}

const SignIn: FC<Props> = (props) => {
  return (
    <SignInLayout {...props}>
        <div>TEST</div>
    </SignInLayout>
  )
}

export default SignIn