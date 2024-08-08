
import Image from "next/image"
import Link from "next/link"


const Navbar = () => {
  return (
    <nav className="max-container">
      <Link href="/">
        <h1>
          <img src="/fofus-removebg-preview.png" alt="logo" className="w-[200px] h-[200px]" />
        </h1>
      </Link>
    </nav>
  )
}

export default Navbar