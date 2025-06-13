'use client'
import Rating from '@/components/common/products/rating';
import TableComp, { Column } from '@/components/common/table';
import { Switch } from '@/components/ui/switch';
import { UPDATE_PRODUCT } from '@/gql/products';
import { IProduct, IProductsResponse } from '@/types/product';
import { useMutation } from '@apollo/client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import type { FC } from 'react';
import { toast } from 'sonner';

interface AdminProductsModuleProps {
    products: IProductsResponse
}

const AdminProductsModule: FC<AdminProductsModuleProps> = ({ products }) => {
    const [update] = useMutation(UPDATE_PRODUCT)
    const router = useRouter()

    const handleChangePublicity = async (product: IProduct) => {
        await update({
            variables: {
                id: product._id!, enabled: !product.enabled
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
            render: (value: IProduct) => {
                const src = '/images/tv.jpg'
                return <div className='flex justify-center'>
                    <Image src={src} width={75} height={75} alt='' />
                </div>
            }
        },
        {
            label: 'Name',
            value: 'name',
        },
        {
            label: 'Price',
            value: 'price',
        },
        {
            label: 'In Stock',
            value: 'stock',
        },
        {
            label: 'Rating',
            value: 'rating',
            render: (value: IProduct) =>
                <div className='flex justify-center'><Rating rating={value.rating} size='sm' /></div>
        },
        {
            label: 'Is Enabled',
            value: 'enabled',
            render: (value: IProduct) => {
                return <div className="flex items-center justify-center" >
                    <Switch checked={value.enabled} onCheckedChange={() => handleChangePublicity(value)} />
                </div>
            }
        },
    ]
    return (
        <TableComp data={products.data} columns={columns} />
    );
}

export default AdminProductsModule;
