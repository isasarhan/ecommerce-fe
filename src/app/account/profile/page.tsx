import ProfileModule from '@/modules/account/profile';
import type { FC } from 'react';

interface ProfilePageProps {}

const ProfilePage: FC<ProfilePageProps> = () => {
    return (
        <ProfileModule/>
    );
}

export default ProfilePage;
