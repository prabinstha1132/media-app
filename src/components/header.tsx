
import { Navbar,NavbarBrand,NavbarContent,NavbarItem,Input ,Button} from "@nextui-org/react";
import Link from "next/link";

export default function Header(){
    return (
       
     <Navbar className="shadow mb-6">
         <NavbarBrand>
<Link href="/">Discuss</Link>
         </NavbarBrand>
         <NavbarContent justify="center">
            <Input/>
         </NavbarContent>
         <NavbarContent justify="end">
            <NavbarItem><Button color="primary" variant="bordered"><Link href="/register"> Sign Up</Link></Button></NavbarItem>
            <NavbarItem><Button color="secondary" variant="bordered"><Link href="/login"> Log In</Link></Button></NavbarItem>
         </NavbarContent>
     </Navbar>
    )
}