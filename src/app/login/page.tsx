
import { Link, Input, Button } from "@nextui-org/react"
import { logInUserHere } from "../../actions/user";
export default function LoginUser() {
  return (
<div className="flex justify-center">

      <form action={logInUserHere} >
        <div className="flex flex-col w-80  p-4 gap-4 shadow-md border-1 rounded-2xl">
          <h2 className="text-center">login</h2>
          <Input

            name="email"
            label="email"
            type="email"
            labelPlacement="outside"
            placeholder="email" />
          <Input
            name="password"
            type="password"
            label="password"
            labelPlacement="outside"
            placeholder="password" />
          <Button type="submit">LogIn</Button>
          <p> Dont have an account?<Link href={"/register"}>register</Link></p>
        </div>
        

      </form>
      </div>
     



  )
}