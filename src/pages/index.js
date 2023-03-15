import HeroSection from "@/components/HeroSection"
import Layout from "@/components/Layout"

export default function Home() {
  return (
    
        <HeroSection/>
    
  )
}


Home.getLayout = function getLayout(page) {
  return (
    <Layout title='Home'>
      {page}
    </Layout>
  )
}