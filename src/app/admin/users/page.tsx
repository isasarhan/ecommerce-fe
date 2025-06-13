import { GET_USERS } from '@/gql/user';
import { client } from '@/lib/apollo-client';
import AdminUsersModule from '@/modules/admin/users';
import type { FC } from 'react';
import * as R from 'ramda'
import { IUser, IUsersResponse } from '@/types/user';
import Title from '@/components/common/title';

const fetchUsers = async () => {
    const res = await client.query({
        query: GET_USERS,
        fetchPolicy: 'no-cache',
    })
    return R.pathOr({}, ['data', 'getUsers'], res) as IUsersResponse
}

interface AdminUsersPageProps { }

const AdminUsersPage: FC<AdminUsersPageProps> = async () => {
    const users = await fetchUsers()

    return (
        <>
            <Title text='All Users' buttonText='Add User' url='/admin/users/add' />
            <AdminUsersModule users={users} />
        </>
    );
}

export default AdminUsersPage;
