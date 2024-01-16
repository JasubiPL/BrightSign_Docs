import '@/styles/DialogBox.css'

export const DialogBox = ({ type = 'info', children }) =>{


  return(
    <div className={`dialogBox __${type}`}>
      { children }
    </div>
  )
}