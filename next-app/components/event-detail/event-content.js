// Import the CSS module named 'event-content.module.css'
import classes from './event-content.module.css';

// Define a functional component named 'EventContent' that takes 'props' as its parameter
function EventContent(props) {
  // Return a section element with the CSS class from the imported module
  // The CSS class name is assigned dynamically based on the 'classes' object
  // which was created from the imported CSS module
  return (
    <section className={classes.content}>
      {/* Render the child components or content passed as 'props.children' */}
      {props.children}
    </section>
  );
}

// Export the 'EventContent' component as the default export of this module
export default EventContent;
