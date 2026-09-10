// Import the Head component from next/head for setting page metadata
import Head from 'next/head'

// Import the Link component for client-side navigation
import Link from 'next/link'

// Import the Layout component using the @ alias from jsconfig.json
import Layout from '@/components/layout'

// Define and export the Home component as the default export for the root route
export default function Home() {
  // Return the JSX markup rendered when this page loads
  return (
    <Layout>
      <Head>
        <title>Home | My Blog</title>
        <meta name="description" content="Welcome to my Next.js blog" />
      </Head>
      <h1>
        <Link href="/posts/first-post">Read my first post</Link>
      </h1>
    </Layout>
  )
}