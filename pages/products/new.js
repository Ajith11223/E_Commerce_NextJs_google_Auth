
import Layout from '@/components/layout'
import axios from 'axios'
import { useState } from 'react'

const NewProduct = () => {
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")
  const [price,seTprice]=useState("")

const createProduct =async(e)=>{
  e.preventDefault()
  const data ={title,description,price}
  const create = await axios.post('/api/product',data)
}

  return (
    <Layout>
      <form onSubmit={createProduct}>

      <h3 >New Product</h3>
      <label htmlFor="">Product Name</label>
       <input type="text"
        placeholder='Product Name' 
        value={title} 
        onChange={evnt => setTitle(evnt.target.value)} />

      <label htmlFor="">Description </label>
       <textarea placeholder='Description' value={description} 
       onChange={ev => setDescription(ev.target.value
        )} />

      <label htmlFor="">Price</label>
       <input type="number" name="" id="" placeholder='Price' value={price} onChange={ev => seTprice(ev.target.value)} />

       <button type='submit' className='btn-primary'>Save</button>
      </form>

    </Layout>
  )
}

export default NewProduct