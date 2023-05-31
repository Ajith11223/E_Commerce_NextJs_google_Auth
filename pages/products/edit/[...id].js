import Layout from '@/components/layout'
import ProductForm from '@/components/productForm'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const EditProductPage = () => {
    const router = useRouter()
    const {id} = router.query

    const [singleProduct,setSingleProduct]=useState(null)

    useEffect(()=>{

      if(!id){
        return
      }
      axios.get('/api/product/?id='+id).then((res)=>{
        setSingleProduct(res.data)
        console.log(res.data,"hhhh")
      })

    },[id])
  return (
    <Layout>
      <h3>Edit Product</h3>
      {
        singleProduct ? <>
        <ProductForm {...singleProduct}/>
        </> :""
      }
        
    </Layout>
  )
}

export default EditProductPage