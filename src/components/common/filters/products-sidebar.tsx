"use client"
import { IProductCategory } from '@/types/product';
import { useEffect, useState, type FC } from 'react';

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from '@/components/ui/label';
import { usePathname, useRouter } from 'next/navigation';
import { Trash } from 'lucide-react';

interface ProductsSidebarProps {
    categories: IProductCategory[]
}

const ProductsSidebar: FC<ProductsSidebarProps> = ({ categories }) => {
    const [filterCategories, setFilteredCategories] = useState<string[]>([])
    const pathName = usePathname()
    const router = useRouter()

    useEffect(() => {
        const params = new URLSearchParams()
        if (filterCategories.length > 0) {
            params.append("filteredCategories", filterCategories.join('&'));
            router.push(`${pathName}?${params}`);
        } else
            router.push(`${pathName}`)

    }, [filterCategories])

    const handleChecked = (isChecked: boolean, value: string) => {
        const filtered = isChecked ? [...filterCategories, value] : filterCategories.filter((v) => v !== value)
        setFilteredCategories(filtered)
    }

    const resetChecked = () => {
        setFilteredCategories([])
    }
    return (
        <div className='px-4 space-y-3'>
            <Button
                onClick={resetChecked}
                type="button"
                variant={'ghost'}
                className='w-full'>
                <Trash /> Clear All Filters
            </Button>
            {categories.map((item, index) => (
                <div className="flex items-center gap-3 pb-3">
                    <Checkbox
                        id={item._id}
                        checked={filterCategories.includes(item._id)}
                        onCheckedChange={(checked) => {
                            const isChecked = !!checked
                            handleChecked(isChecked, item._id)
                        }}
                    />
                    <Label htmlFor={item._id}>{item.name}</Label>
                </div>
            ))}


        </div>

    )
}

export default ProductsSidebar;
