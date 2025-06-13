import AddUserModule from '@/modules/admin/users/add';
import type { FC } from 'react';

interface AdminAddUserProps {}

const AdminAddUser: FC<AdminAddUserProps> = () => {
    return (
        <>
        <AddUserModule/>
        </>
    );
}

export default AdminAddUser;
