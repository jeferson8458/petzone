import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export function Container({children}:Props) {
  return(
    <div className="w-full lg:flex flex-none items-center justify-between max-w-[1246px] px-[15px] mx-auto relative">
      {children}
    </div>
  )
}