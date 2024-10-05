'use server'
import { redirect } from "next/navigation";
import { db } from "../../db";
import { hash } from 'bcryptjs';
import { CredentialsSignin } from "next-auth";
import { signIn } from "../auth";
export async function logInUserHere(formData: FormData) {
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    console.log(email, password)
    try {
        await signIn("credentials", {
            redirect: false,
            callbackUrl: '/',
            email,
            password,
        })

    }
    catch (error) {
        const someError = error as CredentialsSignin
        return someError.cause
    }
    redirect('/');

}

export async function registerUser(formData: FormData) {
    const firstname = formData.get("firstname") as string;
    const lastname = formData.get("lastname") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    if (!firstname || !lastname || !email || !password) {
        throw new Error("you must provide required field");
    }
    const existingUser = await db.user.findUnique({
        where: { email: email }

    })
    if (existingUser) {
        throw new Error("user already exist")
    }

    const hashedPassword = await hash(password, 10)

    const user = await db.user.create({
        data: {
            email: email,
            firstname: firstname,
            lastname: lastname,
            password: hashedPassword,
        }
    })
    console.log(user);
    redirect("/login");

}
