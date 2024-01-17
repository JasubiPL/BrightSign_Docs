import Link from "next/link"

export const PreviusPage = ({ children, slug }) =>{
  return(
    <div className=" flex justify-end mt-8 text-right">
      <Link
      className="flex flex-col underline-none text-md lg:text-2xl hover:text-accent transition-all" 
        href={ slug }
      >
        <small className=" text-xs text-white/40">Página Anterior</small>
        ← {children}
      </Link>
    </div>
  )
}