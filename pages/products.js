import Layout from '@/components/layout'
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Products = () => {

  // product data
  const [productData,setProductData]=useState([])
  useEffect(()=>{
     axios.get('/api/product').then((res)=>{
      setProductData(res.data)
      console.log(res.data)
     })
  },[])
  return (
    <Layout>
       <Link className='bg-green-600 text-white py-2 px-2 rounded-md'  href={'/products/new'}>
       Add new Product
       </Link>

      <table className='basic'>
        <thead>
          <tr>
            <td>Product name</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
            {
              productData?.map((item)=>{
                return(
                  <>
                  <tr>
                  <td>{item.title}</td>
                  <td>
                    <Link href={'/products/edit/'+item._id}> 
                    Edit
                    </Link>
                    <Link href={'/products/delete/'+item._id}> 
                    Delete
                    </Link>
                  </td>
          </tr> 
                  </>
                )
              })
            }
        </tbody>
      </table>
    </Layout>
  )
}

export default Products