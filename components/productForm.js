import axios from "axios"
import { useState } from "react"
import { useRouter } from 'next/router'
import { data } from "autoprefixer"


export default function ProductForm({
    title:exTitle,description:exDescription,price:exPrice,_id,images:exImage
}){

    
    const [title,setTitle]=useState(exTitle || "")
  const [description,setDescription]=useState(exDescription || "")
  const [price,seTprice]=useState(exPrice || "")
  const [image,setImages]=useState(exImage || [])

  const router = useRouter()


  const [goToProduct,setGoToProduct] = useState(false)
  const [loader,setLoader] = useState(false)

  //submit function
const createProduct =async(e)=>{
  e.preventDefault()

  if(_id){
      // update
    const data ={title,description,price,image}

await axios.put('/api/product',{...data,_id})
  }else{
    const data ={title,description,price,image}
  const create = await axios.post('/api/product',data)
}
setGoToProduct(true)
  
}

if(goToProduct){
  router.push('/products') 
}

// upload images 
const uploadImages=async(e)=>{
  const files = e.target?.files
  if(files?.length > 0){
    setLoader(true)
    const data = new FormData()

    for(const file of files){
      data.append("file",file)
    }
    
 const res = await fetch('/api/upload',{
  method:"POST",
  body:data,
 }).then((dat)=>{

   return dat.json()
 }).then((datas)=>{
  console.log(datas)
   setImages((old)=> [...old,...datas?.links])
 })
//  const datas =res?.data?.links

}

}
setLoader(false)

  return (
    <>
      <form onSubmit={createProduct}>

      {/* <h3 >New Product</h3> */}
      <label htmlFor="">Product Name</label>
       <input type="text"
        placeholder='Product Name' 
        value={title} 
        onChange={evnt => setTitle(evnt.target.value)} />

      <label htmlFor="">Photo </label>
      <label className="w-64 h-8 border flex text-center items-center justify-center text-sm rounded-md">
        <div>
        Upload
        </div>

        <input className="hidden" onChange={uploadImages} type="file" />

     
      </label>
     
         {
          image?.length != 0? image?.map((item)=>{
            return(
              <>
              <img src={item+""} alt="" className="rounded-sm w-24 h-10 mt-4"/>
             {
              loader? <span style={{color:"black"}}>loading</span>:""
             }
              </>
            )
          }):""
        }


      <label htmlFor="">Description </label>
       <textarea placeholder='Description' value={description} 
       onChange={ev => setDescription(ev.target.value
        )} />

      <label htmlFor="">Price</label>
       <input type="number" name="" id="" placeholder='Price' value={price} onChange={ev => seTprice(ev.target.value)} />

       <button type='submit' className='btn-primary'>Save</button>
      </form>

    </>
  )
}