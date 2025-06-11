"use client"
import { IProductCategory } from '@/types/product';
import { useEffect, useState, type FC } from 'react';

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from '@/components/ui/label';
import { usePathname, useRouter } from 'next/navigation';
import { Trash } from 'lucide-react';
import { Select, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';

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
        <ScrollArea className='max-h-screen h-full'>
            <div className='space-y-3 flex '>
                <div className=''>
                    {filterCategories.length !== 0 ?
                        <Button
                            onClick={resetChecked}
                            type="button"
                            variant={'ghost'}
                            className='cursor-pointer hover:bg-white '>
                            <Trash /> Clear All Filters
                        </Button> : <></>}
                    <div className='space-y-7'>
                        <div className='my-5 text-2xl'>Categories</div>
                        {categories.map((item, index) => (
                            <div className="flex items-center gap-5">
                                <Checkbox
                                    id={item._id}
                                    checked={filterCategories.includes(item._id)}
                                    onCheckedChange={(checked) => {
                                        const isChecked = !!checked
                                        handleChecked(isChecked, item._id)
                                    }}
                                />
                                <Label className='' htmlFor={item._id}>{item.name}</Label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </ScrollArea>
    )
}

export default ProductsSidebar;
