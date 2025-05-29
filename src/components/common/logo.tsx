import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

interface LogoProps { }

const Logo: FC<LogoProps> = () => {
    return (
        <Link href={'/'}>
            <Image src={`/images/logo.png`} alt={'ecommerce logo'} width="64" height="64" />
        </Link>
    )
}

export default Logo;
