'use client'
import FormCheckbox from '@/components/common/form/checkbox';
import FormInput from '@/components/common/form/input';
import FormTextArea from '@/components/common/form/textarea';
import ImageUploader from '@/components/common/image-uploader';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Form } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { IProductCategory } from '@/types/product';
import { zodResolver } from '@hookform/resolvers/zod';
import type { FC } from 'react';
import { useForm } from 'react-hook-form';
import { productSchema } from '../validation';
import { Button } from '@/components/ui/button';
import { z } from 'zod';

interface AddProductModuleProps {
    categories: IProductCategory[]
}

const AddProductModule: FC<AddProductModuleProps> = ({ categories }) => {
    const form = useForm({
        mode: "onBlur",
        resolver: zodResolver(productSchema)
    });
    const { handleSubmit } = form;

    type ProductData = z.infer<typeof productSchema>;

    const onSubmit = async (data: ProductData) => {
        console.log('data', data);
    }
    return (
        <>
            <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        <div className="col-span-1 sm:col-span-2 lg:col-span-3">
                            <Card>
                                <CardContent className='space-y-3'>
                                    <div className=' text-2xl'>Product Name</div>
                                    <FormInput
                                        control={form.control}
                                        name="name"
                                        placeholder="Enter customer name"
                                    />
                                    <div className="grid grid-cols-2 gap-5">
                                        <FormInput
                                            control={form.control}
                                            name="price"
                                            title='Price'
                                            type='number'
                                            defaultValue={0}
                                            placeholder="Enter price"
                                        />
                                        <FormInput
                                            control={form.control}
                                            name="salePrice"
                                            title='Sale Price'
                                            type='number'
                                            defaultValue={0}
                                            placeholder="Enter sale price"
                                        />
                                    </div>
                                    <FormTextArea
                                        control={form.control}
                                        name="description"
                                        title='Description'
                                        placeholder="Enter description"
                                        rows={10}
                                    />
                                    <Button type='submit'>Save</Button>

                                </CardContent>
                            </Card>
                        </div>
                        <div className='space-y-5'>
                            <Card>
                                <CardContent className='space-y-3'>
                                    <div className=' text-2xl'>Categories</div>
                                    <ScrollArea className='h-32 '>
                                        {categories.map((item) => (
                                            <FormCheckbox
                                                className='mb-3'
                                                key={item._id}
                                                control={form.control}
                                                name="categories"
                                                item={{
                                                    label: item.name,
                                                    value: item._id
                                                }}
                                            />
                                        ))}
                                    </ScrollArea>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent>
                                    <ImageUploader
                                        control={form.control}
                                        name="featuredImage"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </form>
            </Form>
        </>
    );
}

export default AddProductModule;
