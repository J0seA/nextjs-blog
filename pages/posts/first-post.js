// Import the Link component from next/link for client-side navigation
import Link from 'next/link'

// Export the FirstPost component as the default export for this route
export default function FirstPost() {
  // Return the JSX markup for the first post page
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  )
}