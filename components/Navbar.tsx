
import Image from "next/image"
import Link from "next/link"


const Navbar = () => {
  return (
    <nav className="max-container padding-container relative z-30 pt-5">
      <Link href="/">
        <h1 className="font-light text-5xl pt-4">ORCI</h1>
      </Link>
    </nav>
  )
}

export default Navbar