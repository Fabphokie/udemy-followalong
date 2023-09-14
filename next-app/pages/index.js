// Import necessary modules and components
import { getFeaturedEvents } from "../helpers/api-util"; // Import a function to get featured events
import EventList from "../components/events/event-list"; // Import the EventList component
import NewsletterRegistration from "@/components/input/newsletter-registration";

// Define the Home component (default export)
export default function Home(props) {
  
  // Return the JSX for the Home component
  return (
    <div>
      
      <NewsletterRegistration/>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}