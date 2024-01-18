import '@/styles/DialogBox.css'

export const DialogBox = ({ type = 'info', children, className = '' }) =>{


  return(
    <div className={`dialogBox __${type} ${className}`}>
      { children }
    </div>
  )
}