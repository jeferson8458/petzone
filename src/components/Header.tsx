import Image from "next/image";
import Logo from '@/assets/logo.svg'
import Link from "next/link";

export function Header() {
  return(
    <header className="flex items-center w-full h-20 absolute">
      <div className="w-full flex items-center justify-center  max-w-[1246px] px-[15px] mx-auto sm:justify-between">
        <div>
          <div className="flex items-center justify-between gap-[58px]">
            <Image src={Logo} alt="logo"/>
            <ul className="hidden sm:flex">
              <li className="flex gap-12 font-bold text-blue-950">
                <Link href='/'>
                  <button>Home</button>
                  </Link>
                <button>Categoria</button>
                <button>About</button>
                <button>Contact</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden sm:flex">
        <button className="bg-blue-950 text-white rounded-full w-[235px] h-[44px]">Junte-se à comunidade</button>
        </div>
      </div>
    </header>
  )
}