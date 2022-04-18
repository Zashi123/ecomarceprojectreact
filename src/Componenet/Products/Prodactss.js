import React, {useState} from 'react'
import { Container, Grid, Box, Button, Paper } from '@mui/material'
import p1 from '../../images/p1.jpg'
import p6 from '../../images/p6.jpg'
import p12 from '../../images/p12.jpg'
import p7 from '../../images/p7.jpg'
import p13 from '../../images/p13.jpg'
import Proudct from './Proudct'

const proudacts=[
    { id:1, desc:'nvnvnvnn vnvnvnv',imgp:p1, category: 'male', price:'222334'},
    { id:2, desc:'nvnvnvnn vnvnvnv',imgp:p1, category: 'female', price:'222334'},
    { id:3, desc:'nvnvnvnn vnvnvnv',imgp:p6, category: 'accessories', price:'222334' },
    { id:4, desc:'nvnvnvnn vnvnvnv',imgp:p7, category: 'accessories', price:'222334'},
    { id:5, desc:'nvnvnvnn vnvnvnv',imgp:p12, category: 'female',  price:'222334'},
    { id:6, desc:'nvnvnvnn vnvnvnv',imgp:p1, category: 'male', price:'222334'},
    { id:7, desc:'nvnvnvnn vnvnvnv',imgp:p13, category: 'female',  price:'222334'},
    { id:8, desc:'nvnvnvnn vnvnvnv',imgp:p12, category: 'female',price:'222334'},
    { id:9, desc:'nvnvnvnn vnvnvnv',imgp:p1, category: 'male', price:'222334'},
    { id:10, desc:'nvnvnvnn vnvnvnv',imgp:p1, category: 'male', price:'222334'},
    { id:11, desc:'nvnvnvnn vnvnvnv',imgp:p1, category: 'male', price:'222334'},
    { id:12, desc:'nvnvnvnn vnvnvnv',imgp:p1, category: 'male', price:'222334'},

 
]

function Prodactss() {
  const [state, updateState] = useState({
    items: proudacts
  })

  function showMenuItems(prods){
    const menuList =  prods.map(prod => {
      return (
      <Grid item key={prod.id} xs={12} sm={6} md={4} lg={3}>
        <Proudct p={prod}/>
      </Grid>
        )})

        return menuList
    }

 // get only unique categories from menu array
 const categories = proudacts.reduce(function(values, item){
    if(!values.includes(item.category)){
      values.push(item.category)
    }
    return values
  },["all"])


  // Function that will be called when category button is clicked
  const handleCategoryClick = (e) => {
      const category = e.target.id
      const categoryProducts = proudacts.filter(product => {
        if(product.category === category){
          return product
        }
      })
  
      if(category === 'all'){
        updateState({
          items: proudacts
        })
      }
      else{
        updateState({
          items: categoryProducts
        })
      }
  }

// Loop through the categories, create a button for each category and display them in the component
  const categoryBtns = categories.map(category =>{
    return <Button onClick={handleCategoryClick} style={{margin: '5px'}} variant='contained' id={category}>{category}</Button>
  })
    
  return (

   <Container  maxWidth='lg'  >
       <Box style={{marginTop: '50px'}}>
           {categoryBtns}
       </Box>
       <Grid container justify="center" spacing={2}>
           {showMenuItems(state.items)}
       </Grid>
   </Container>

 
  )
}

export default Prodactss