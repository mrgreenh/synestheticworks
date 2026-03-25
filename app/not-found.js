import Layout from "../src/components/layout"

export const metadata = {
  title: '404: Not found',
}

export default function NotFound() {
  return (
    <Layout>
      <h1>PAGE NOT FOUND :(</h1>
      <p>You may not be responsible for getting knocked down. But you&apos;re certainly responsible for getting back up.</p>
      <p><i>- Wally Amos</i></p>
    </Layout>
  )
}
