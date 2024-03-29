import Link from "next/link"

export const NextPage = ({ children, slug }) =>{
  return(
    <div className=" flex justify-end mt-8">
      <Link
      className="flex flex-col underline-none text-md lg:text-2xl hover:text-accent transition-all" 
        href={ slug }
      >
        <small className=" text-xs text-white/40">Siguiente Página</small>
        {children} →
      </Link>
    </div>
  )
}