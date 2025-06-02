'use client'
import FormInput from '@/components/common/form/input';
import FormPassword from '@/components/common/form/password';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { User } from 'lucide-react';
import type { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod'
import { signInSchema } from '../register/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useUserContext } from '@/providers/global-data-provider';
import { Form } from '@/components/ui/form';

interface LoginModuleProps { }

const LoginModule: FC<LoginModuleProps> = () => {
    const { signIn } = useUserContext()

    type FormData = z.infer<typeof signInSchema>

    const form = useForm<FormData>({
        resolver: zodResolver(signInSchema),

    })

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        const { email, password } = data
        signIn(email, password )
    };

    return (
        <div className='flex justify-center'>
            <Card className="lg:w-1/3 mx-2">
                <div className='flex justify-center '>
                    <div className='rounded-full border-2 p-5 border-dashed '>
                        <User width={55} height={55} />
                    </div>
                </div>
                <CardContent className=" space-y-4">
                    <Form {...form} >
                        <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto flex flex-col gap-3">
                            <div className="grid grid-cols-1 gap-3 items-start" >
                                <FormInput
                                    control={form.control}
                                    name="email"
                                    title="Email"
                                    placeholder="Enter user name" />

                                <FormPassword
                                    control={form.control}
                                    name="password"
                                    title="Password"
                                    placeholder="Enter password" />
                            </div>

                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}

export default LoginModule;
