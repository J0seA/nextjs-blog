// Import the Link component for client-side navigation between pages
import Link from 'next/link'

// Define and export the Home component as the default export for the root route
export default function Home() {
  // Return the JSX markup rendered when this page loads
  return (
    <h1>
      <Link href="/posts/first-post">Read my first post</Link>
    </h1>
  )
}