import classes from './event-item.module.css';
import Button from "../ui/button";
import DateIcon from '../icons/date-icon'
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';

export default function EventItem(props) {
    const { title, images, date, location, id } = props;

    // For Date
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    // For the Address
    const formattedAddress = location ? location.replace(', ', '\n') : '';

    // For the Link
    const exploreLink = `/event/${id}`;

    return (
        <div>
            <li className={classes.item}>
                <img src={'/' + images} alt={title}/>
                <div className={classes.content}>
                    <div className={classes.summary}>
                        <h2>{title}</h2>
                        <div className={classes.date}>
                            <DateIcon />
                            <time>{humanReadableDate}</time>
                        </div>
                        {location && (
                            <div className={classes.address}>
                                <AddressIcon />
                                <address>{formattedAddress}</address>
                            </div>
                        )}
                    </div>
                    <div className={classes.actions}>
                        <Button link={exploreLink}>
                            <span>Explore Event</span>
                            <span className={classes.actions}><ArrowRightIcon /></span>
                        </Button>
                    </div>
                </div>
            </li>
        </div>
    );
}
