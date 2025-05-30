import LoginModule from '@/modules/auth/login';
import type { FC } from 'react';

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = () => {
    return (
        <LoginModule/>
    );
}

export default LoginPage;
