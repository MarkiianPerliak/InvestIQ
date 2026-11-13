import {z} from "zod"

export const loginSchema = z.object({
    email:z.email({error: "Put in a real email"}).min(1, "Put in a real email"),
    password:z.string().min(6, "Password is too short").min(1, "Password must be")
})

export const registrationSchema = z.object({
    email:z.email({error: "Put in a real email"}).min(1, "Put in a real email"),
    password:z.string().min(6, "Password is too short").min(1, "Password must be")
})