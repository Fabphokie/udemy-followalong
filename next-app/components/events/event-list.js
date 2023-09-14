import EventItem from "./event-item";
import classes from './event-list.module.css'

export default function EventList(props) {

    const { items } = props;


    return(
        <div>
            <ul className={classes.list}>
                {items.map((event) => (<EventItem 
                key={event.id}
                title={event.tittle}
                location={event.location}
                date={event.date}
                images={event.image}
                 />))}
            </ul>
        </div>
    )
}