import {z} from "zod"

export const loginSchema = z.object({
    email:z.email({error: "Put in a real email"}),
    password:z.string().min(6, "Password is too short")
})

type loginType = z.infer<typeof loginSchema>