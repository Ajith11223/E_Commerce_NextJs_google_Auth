import Layout from '@/components/layout'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Category = () => {

    const [name,setName]=useState("")
    const [categoryData,setCategoryData]=useState([])
    const [rendar,setRendar]=useState(1)


    useEffect(()=>{

        const fetchCategory =async()=>{
            const {data} = await axios.get('/api/category')
            setCategoryData(data.cateData)
            
        }

        fetchCategory()

    },[rendar])

    //saveCategory
    const saveCategory=async(e)=>{
        e.preventDefault()
     await axios.post('/api/category',{name})
     setName("")
     setRendar((pre)=> pre + 1)
    }
  return (
    <Layout>
        <h1>Categories</h1>
        <label htmlFor="">category Name</label>
        <form onSubmit={saveCategory} className="flex w-80 gap-1">

        <input style={{width:"300px"}} 
         type="text" 
         onChange={(ev => setName(ev.target.value))}
         placeholder='Category Name'
          value={name} />
        <button type='submit' className='btn btn-primary mb-1'>Save</button>
        </form>

        <table className='basic m-2 w-48' style={{width:"500px"}}>
            <thead>
                <tr>
                    <td>Category Name</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
            {
                categoryData?.map((item)=>{
                    return(
                        <>
                       <tr>
                       <td>{item.name}</td>
                        <td className='text-center'>
                        <button className='btn btn-primary ml-1'>Edit</button>
                            <button className='btn btn-default ml-1'>Delete</button>
                        
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

export default Category