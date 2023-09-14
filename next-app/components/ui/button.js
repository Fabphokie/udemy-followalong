import Link from "next/link";
import classes from './button.module.css';

function Button(props) {
 if(props.Link) {
    return (
        <Link href={props.link} className={classes.btn}>
            {props.children}
        </Link>
    );
 }
  return <button className={classes.btn} onClick={props.onClick}>
    {props.children}
    </button>
}

export default Button;