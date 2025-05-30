import RegisterModule from '@/modules/auth/register';
import type { FC } from 'react';

interface RegisterPageProps {}

const RegisterPage: FC<RegisterPageProps> = () => {
    return (
        <RegisterModule/>
    );
}

export default RegisterPage;
