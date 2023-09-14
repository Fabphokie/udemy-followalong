// Import necessary modules and components
import { getEventById, getAllEvents } from "../../helpers/api-util"; // Import a function to get event data by ID
import { Fragment } from "react"; // Import the 'Fragment' component from React

import EventSummary from "@/components/event-detail/event-summary"; // Import the EventSummary component
import EventLogistics from "@/components/event-detail/event-logistics"; // Import the EventLogistics component
import EventContent from "@/components/event-detail/event-content"; // Import the EventContent component
import Comments from "@/components/input/comments";

// Define the EventDetailPage component
function EventDetailPage(props) {
   
    // Get event data by ID using the 'getEventById' function
    const event = props.selectedEvent
    
    // If no event is found, display a message
    if (!event) {
        return(
          <div className="center">
              <p>Loading...</p>;
          </div>
      
        )  
    }


    // Return the JSX for the EventDetailPage component
    return (
        <Fragment>
            {/* Display the EventSummary component with the event title */}
            <EventSummary title={event.title} />
            {/* Display the EventLogistics component with event logistics data */}
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent>
                {/* Display the event description within the EventContent component */}
                <p>{event.description}</p>
            </EventContent>
            <Comments eventId={event.id} />
        </Fragment>
    );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const selectedEvent = await getEventById(eventId);

  return {
    props: {
      selectedEvent,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents();
  const paths = events.map(event => ({params: { eventId: event.id} }));
  return {
    paths: paths,
    fallback: 'blocking'
  }
}

// Export the EventDetailPage component as the default export of this module
export default EventDetailPage;
