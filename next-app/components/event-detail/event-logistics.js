// Import necessary components and CSS module
import AddressIcon from '../icons/address-icon'; // Import the AddressIcon component
import DateIcon from '../icons/date-icon'; // Import the DateIcon component
import LogisticsItem from './logistics-item'; // Import the LogisticsItem component
import classes from './event-logistics.module.css'; // Import the CSS module


// Define the EventLogistics component that takes 'props' as its parameter
function EventLogistics(props) {
  // Destructure props to extract date, address, image, and imageAlt
  const { date, address, image, imageAlt } = props;

  // Convert the 'date' prop to a human-readable format
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  // Replace the comma and space in 'address' with a line break for formatting
  const addressText = address.replace(', ', '\n');

  // Return the JSX for the EventLogistics component
  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        {/* Display the event image with alt text */}
        <img src={`/${image}`} alt={imageAlt} width={200} height={240} />
      </div>
      <ul className={classes.list}>
        {/* Render the LogisticsItem component for date with DateIcon */}
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        {/* Render the LogisticsItem component for address with AddressIcon */}
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

// Export the EventLogistics component as the default export of this module
export default EventLogistics;
