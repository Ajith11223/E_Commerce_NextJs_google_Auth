
import Layout from '@/components/layout'
import ProductForm from '@/components/productForm'
import axios from 'axios'

const NewProduct = () => {
  return(
    <Layout>
      <h3>Create Product</h3>
      <ProductForm/>
    </Layout>
  )
}

export default NewProduct