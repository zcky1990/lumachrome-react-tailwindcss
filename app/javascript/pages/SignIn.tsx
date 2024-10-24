import type { FC } from 'react'
import SignInLayout from '../layout/SignInLayout'
import {LoginForm} from '../components/sign_in/LoginForm'

interface Props {
    [key: string]: any;
}

const SignIn: FC<Props> = (props) => {
  return (
    <SignInLayout {...props}>
        <LoginForm />
    </SignInLayout>
  )
}

export default SignIn