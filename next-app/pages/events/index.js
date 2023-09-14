// Import necessary modules and components
import { getAllEvents } from "../../helpers/api-util"; // Import a function to get all events
import EventList from '../../components/events/event-list'; // Import the EventList component
import { Fragment } from "react"; // Import the 'Fragment' component from React
import EventsSearch from "@/components/events/events-search"; // Import the EventsSearch component
import { useRouter } from 'next/router'; // Import the 'useRouter' hook from Next.js

// Define the AllEventsPage component
function AllEventsPage(props) {
    
    const {events} = props;
    const router = useRouter();

    // Define a function to handle event search
    function findEventsHandler(year, month) {
        // Create the full path for the search using year and month
        const fullPath = `/events/${year}/${month}`;

        // Use the 'router.push' method to navigate to the search path
        router.push(fullPath);
    }

    // Return the JSX for the AllEventsPage component
    return (
        <Fragment>
            
            <EventsSearch onSearch={findEventsHandler} />
            <EventList items={events} />
        </Fragment>
    );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return{
    props:{
      events: events,
    },
    revalidate: 60
  }
}

// Export the AllEventsPage component as the default export of this module
export default AllEventsPage;
