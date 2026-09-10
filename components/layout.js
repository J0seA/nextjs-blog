// Import the CSS module for styling the Layout component
import styles from './layout.module.css'

// Export the Layout component as the default export
export default function Layout({ children }) {
  // Return the JSX that wraps every page's content
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}