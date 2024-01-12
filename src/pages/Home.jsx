import '../styles/pages/homePage.css'

export const Home = () =>{

  return(
    <section className="homePage">
      <div className='container'>
        <h1>
          La documentación en español sobre el sistema de señalización digital más usado del mundo. 
        </h1>
        <button onClick={() => setPage}>Comenzar</button>
      </div>
    </section>
  )
}