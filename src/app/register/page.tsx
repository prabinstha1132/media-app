import { registerUser } from "@/actions/user";
import { Link,Button,Input} from "@nextui-org/react";

export default function CreateForm(){
return(
 
<div className="flex justify-center">
      <form action={registerUser}>
        <div className="flex flex-col gap-4 p-4 w-80 border-2 border-green-100 rounded-2xl shadow-md">
          <h2 className="text-center">SignUp</h2>
          <Input
          name="firstname"
          id="firstname"
          label="firstname"
          placeholder="firstname"
          labelPlacement="outside"/>
             <Input
          name="lastname"
          id="lastname"
          label="lastname"
          placeholder="lastname"
          labelPlacement="outside"/>
          <Input
          name="email"
          id="email"
          label="email"
          placeholder="email"
          labelPlacement="outside"/>
          <Input
          name="password"
          id= "password"
          label= "password"
          placeholder="password"
          labelPlacement="outside"/>
          <Button type="submit">SIGNUP</Button>
          <p>already have an account? <Link href="/login">Login</Link></p>

        </div>
      </form>
      </div>
   
)


}