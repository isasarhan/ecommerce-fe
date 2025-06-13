'use client'
import TableComp, { Column } from '@/components/common/table';
import { Switch } from '@/components/ui/switch';
import { UPDATE_USER } from '@/gql/user';
import { IUser, IUsersResponse } from '@/types/user';
import { useMutation } from '@apollo/client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import type { FC } from 'react';
import { toast } from 'sonner';

interface AdminUsersModuleProps {
    users: IUsersResponse
}

const AdminUsersModule: FC<AdminUsersModuleProps> = ({ users }) => {
    const [update] = useMutation(UPDATE_USER)
    const router = useRouter()

    const handleChangePublicity = async (user: IUser) => {
        await update({
            variables: {
                id: user._id!, isEnabled: !user.isEnabled
            }
        }).then(() => {
            router.refresh()
            toast.success('updated!')
        })
    }
    const columns: Column[] = [
        {
            label: 'Featured Image',
            value: 'featuredImage',
            render: (value: IUser) => {
                const src = '/images/profile.png'
                return <div className='flex justify-center'>
                    <Image className='rounded-full border' src={src} width={75} height={75} alt='' />
                </div>
            }
        },
        {
            label: 'User Name',
            value: 'userName',
        },
        {
            label: 'Email',
            value: 'email',
        },
        {
            label: 'Phone',
            value: 'phone',
        },
        {
            label: 'Is Enabled',
            render: (value: IUser) => {
                return <div className="flex items-center justify-center" >
                    <Switch checked={value.isEnabled} onCheckedChange={() => handleChangePublicity(value)} />
                </div>
            }
        },
    ]
    return (
        <TableComp data={users.data } columns={columns} />
    );
}

export default AdminUsersModule;
