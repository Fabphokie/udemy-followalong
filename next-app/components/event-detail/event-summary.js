// Import the CSS module named 'event-summary.module.css'
import classes from './event-summary.module.css';

// Define a functional component named 'EventSummary' that takes 'props' as its parameter
function EventSummary(props) {
  // Destructure the 'title' prop from 'props'
  const { title } = props;

  // Return a section element with the CSS class from the imported module
  // The CSS class name is assigned dynamically based on the 'classes' object
  // which was created from the imported CSS module
  return (
    <section className={classes.summary}>
      {/* Render the 'title' prop as an <h1> element */}
      <h1>{title}</h1>
    </section>
  );
}

// Export the 'EventSummary' component as the default export of this module
export default EventSummary;
