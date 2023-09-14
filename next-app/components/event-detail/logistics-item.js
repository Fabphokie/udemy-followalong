// Import the CSS module named 'logistics-item.module.css'
import classes from './logistics-item.module.css';

// Define a functional component named 'LogisticsItem' that takes 'props' as its parameter
function LogisticsItem(props) {
  // Destructure the 'icon' prop from 'props' and rename it as 'Icon'
  const { icon: Icon } = props;

  // Return a list item (<li>) element with the CSS class from the imported module
  // The CSS class name is assigned dynamically based on the 'classes' object
  // which was created from the imported CSS module

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        {/* Render the 'Icon' component, which is expected to be an icon component */}
        <Icon />
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
}

// Export the 'LogisticsItem' component as the default export of this module
export default LogisticsItem;
