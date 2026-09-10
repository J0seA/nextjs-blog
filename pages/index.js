// Import the Link component for client-side navigation
import Link from 'next/link'

// Import the Layout component that wraps every page with shared chrome
import Layout from '../components/layout'

// Define and export the Home component as the default export for the root route
export default function Home() {
  // Return the JSX markup rendered when this page loads
  return (
    <Layout>
      <h1>
        <Link href="/posts/first-post">Read my first post</Link>
      </h1>
    </Layout>
  )
}