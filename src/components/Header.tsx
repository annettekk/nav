import Link from "next/link";

export default function Header() {
    return(
        <div>
        <Link href='/'>Home</Link> 
        <Link href='about'>About</Link>
        <Link href='pets'>Pets</Link>
        </div>
    )
}