// Import the Image component from next/image for optimized, lazy-loaded images
import Image from 'next/image'

// Import the Link component for client-side navigation back to home
import Link from 'next/link'

// Import the Layout component using the @ alias from jsconfig.json
import Layout from '@/components/layout'

// Export the FirstPost component as the default export for this route
export default function FirstPost() {
  // Return the JSX markup for the first post page
  return (
    <Layout>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <Image
        src="/profile.jpg"
        height={144}
        width={144}
        alt="Profile picture"
      />
    </Layout>
  )
}