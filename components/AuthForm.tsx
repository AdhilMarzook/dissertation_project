'use client';

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomInput from './CustomInput';
import { authFormSchema } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { signIn, signUp } from '@/lib/actions/user.actions';
import PlaidLink from './PlaidLink';



const AuthForm = ({ type}: {type: string}) => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const formSchema = authFormSchema(type);
    

    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password:"",
    },
  })
 
  // 2. Define a submit handler.
  const onSubmit = async(data: z.infer<typeof formSchema>) => {
  
    setIsLoading(true);
    try{
        
        if(type === 'sign-up'){
            const userData ={
                firstName: data.firstName!,
                lastName: data.lastName!,
                address1: data.address1!,
                city: data.city!,
                state: data.state!,
                postalCode: data.postalCode!,
                dateOfBirth: data.dateOfBirth!,
                ssn: data.ssn!,
                email: data.email,
                password: data.password
            }
            const newUser = await signUp(userData);

            setUser(newUser);
        }
        if (type === 'sign-in'){
           const response = await signIn({
                email: data.email,
               password: data.password,
            })
            if(response) router.push('/')
        }
    } catch (error) {
        console.log(error);
    }finally {
        setIsLoading(false);
    }
  }

  return (
    <section className='auth-form'>
        <header className='flex flex-col gap-5 md:gap-8'>
        <Link href="/"
                className='cursor-pointer items-center gap-1'>
                    <Image
                        src="/icons/lgo.svg"
                        width={34}
                        height={34}
                        alt='Dissertation Logo'
                    />
                    <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>Dissertation Project</h1>
                </Link>

                <div className='flex flex-col gap-1 md:gap-3'>
                    <h1 className='text-25 lg:text-35 text-gray-800'>
                        {user
                            ? 'Link Account'
                            : type === 'sign-in'
                                ? 'Sign In'
                                : 'Sign Up'
                        }
                        <p className='text-15 text-gray-500'>
                            {user
                                ? 'Link an account to get started'
                                : 'Please enter your details'
                            }
                        </p>
                    </h1>
                </div>
        </header>
        {user ? (
            <div className='flex flex-col gap-4'>
                <PlaidLink user={user} variant="primary"/>
            </div>
        ): (
            <>
             <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    {type === 'sign-up' && (
                        <>
                            <div className='flex gap-5'>
                            <CustomInput 
                            control={form.control} name='firstName'
                            label='First Name' placeholder='Enter your first name'
                            />
                            <CustomInput 
                            control={form.control} name='lastName'
                            label='Last Name' placeholder='Enter your last name'
                            />
                            </div>
                            <CustomInput 
                            control={form.control} name='address1'
                            label='Address' placeholder='Enter your address'
                            />
                            <CustomInput 
                            control={form.control} name='city'
                            label='City' placeholder='Enter your city'
                            />
                            <div className='flex gap-5'>
                            <CustomInput 
                            control={form.control} name='state'
                            label='State' placeholder='Example: Staffordshire'
                            />
                            <CustomInput 
                            control={form.control} name='postalCode'
                            label='Post Code' placeholder='Example: ST4 2EU'
                            />
                            </div>
                            <div className='flex gap-5'>
                            <CustomInput 
                            control={form.control} name='dateOfBirth'
                            label='Date of Birth' placeholder='YYYY-MM-DD'
                            />
                            <CustomInput 
                            control={form.control} name='ssn'
                            label='SSN' placeholder='Example: AB123456A'
                            />
                            </div>
                        </>
                    )}
                    <CustomInput 
                        control={form.control} name='email'
                        label='Email' placeholder='Enter your Email'
                    />
                    <CustomInput 
                        control={form.control} name='password'
                        label='Password' placeholder='Enter your password'
                    />
                    <div className='flex flex-col gap-5'>
                    <Button type="submit" className='form-btn' disabled={isLoading}>
                        {isLoading ? (
                            <>
                                <Loader2 size={25}
                                className='animate-spin' /> &nbsp;
                                Loading...
                            </>
                        ): type === 'sign-in'
                            ? 'Sign in'
                            : 'Sign up'
                        
                        }</Button>
                        </div>
                </form>
                </Form>
                <footer className='flex justify-center gap-2'>
                    <p className='text-15'>{type === 'sign-in'
                        ? 'Don\'t have an account?'
                        : 'Already have an account?'}

                    </p>
                    <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className='form-link'>
                        {type === 'sign-in'
                            ? 'Sign up'
                            : 'Sign in'}
                    </Link>
                </footer>

            </>
        )}
    </section>
  )
}

export default AuthForm