'use client'
import type { FC } from 'react';
import * as z from 'zod'
import { registerSchema } from './validation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from 'sonner';
import { Card, CardContent } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import FormInput from '@/components/common/form/input';
import FormPassword from '@/components/common/form/password';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';
import { useMutation } from '@apollo/client';
import { REGISTER } from '@/gql/auth';

interface RegisterModuleProps { }

const RegisterModule: FC<RegisterModuleProps> = () => {
    const [register] = useMutation(REGISTER)
    type FormData = z.infer<typeof registerSchema>

    const form = useForm<FormData>({
        resolver: zodResolver(registerSchema),
    })
    
    const onSubmit: SubmitHandler<FormData> = async (data) => {
        register({
            variables: data
        }).then(() => {            
            toast.success('registered successfully')
        })
        .catch((e)=>{
            toast.error(e.message);
        })
    };

    return (
        <div className='flex justify-center'>
            <Card className="lg:w-1/2 mx-2">
                <div className='flex justify-center '>
                    <div className='rounded-full border-2 p-5 border-dashed '>
                        <User width={55} height={55} />
                    </div>
                </div>
                <CardContent className=" space-y-4">
                    <Form {...form} >
                        <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto flex flex-col gap-3">
                            <div className="grid grid-cols-2 gap-3 items-start" >
                                <FormInput
                                    control={form.control}
                                    name="userName"
                                    title="User Name"
                                    placeholder="Enter user name" />

                                <FormPassword
                                    control={form.control}
                                    name="password"
                                    title="Password"
                                    placeholder="Enter password" />
                            </div>
                            <div className="grid grid-cols-2 gap-3 items-start" >

                                <FormInput
                                    control={form.control}
                                    name="firstName"
                                    title="First Name"
                                    placeholder="Enter first name" />
                                <FormInput
                                    control={form.control}
                                    name="lastName"
                                    title="Last Name"
                                    placeholder="Enter first name" />
                            </div>

                            <FormInput
                                control={form.control}
                                name="phone"
                                title="Phone"
                                placeholder="Enter phone number" />
                            <FormInput
                                control={form.control}
                                name="email"
                                title="Email"
                                placeholder="Enter your email" />

                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}

export default RegisterModule;
