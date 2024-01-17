export const currentPath = ( pathname ) =>{
  
  const pageItems = document.querySelectorAll('.acordionMenu__item')
  pageItems.forEach(item =>{
    item.className = 'acordionMenu__item'
  })

  const activeItemPage = document.getElementById(pathname)
  activeItemPage.className = 'acordionMenu__item selected'
}