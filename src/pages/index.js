import Layout from "@/components/Layout"

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="text-3xl font-bold bg-green-700 text-white-300">
        hello world
      </div>
    </div>
  )
}


Home.getLayout = function getLayout(page) {
  return (
    <Layout title='Home'>
      {page}
    </Layout>
  )
}