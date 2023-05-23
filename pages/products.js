import Layout from '@/components/layout'
import Link from 'next/link'

const Products = () => {
  return (
    <Layout>
       <Link className='bg-green-600 text-white py-2 px-2 rounded-md'  href={'/products/new'}>
       Add new Product
       </Link>
    </Layout>
  )
}

export default Products