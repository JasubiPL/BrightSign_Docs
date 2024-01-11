import '../styles/PageAside.css'

export const PageAside = ({ internalSection }) =>{

  return(
    <aside className='pageBody__aside' >
      <div className='__aside__header'>
        <h3>En esta Pagína 🔎</h3>
      </div>
      <ol>
        {
          internalSection.map(section => {
            return(
              
              <a key={ section } href={`#${section}`}> { section }</a>
            
            )
          })
        }
      </ol>
    </aside>
  )
}