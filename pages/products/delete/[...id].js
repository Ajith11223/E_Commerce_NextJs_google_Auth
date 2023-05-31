import Layout from '@/components/layout'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const ProductDelete = () => {
const router =useRouter()
const {id}=router.query


const [singleProduct,setSingleProduct]=useState(null)
useEffect(()=>{
    if(!id){
        return
    }
    axios.get('/api/product/?id='+id).then((res)=>{
        setSingleProduct(res.data)
        console.log(res.data,"ddddddddddddddddddddddddd")
    })
},[id])

const goBack=()=>{
    router.push('/products')
}

//delete
const deleteProduct=async()=>{
   await axios.delete('/api/product/?id='+id)
   goBack()
}

  return (
    <Layout>
        <h2 className='flex  justify-center'>Do you want delete {singleProduct?.title} ?</h2>
        <div className='flex gap-1 justify-center'>

        <button className='btn-red' onClick={deleteProduct}>Yes</button>
        <button className='btn-default' onClick={goBack}>No</button>
        </div>
    </Layout>
  )
}

export default ProductDelete