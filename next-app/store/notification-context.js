import { createContext, useState } from "react";



const NotificationContext = createContext({
    Notification: null,
    showNotification: function(notificationData) {},
    hideNotification: function() {},
});

export function NotificationContextProvider(props) {
   const [activeNotification, setActiveNotification] = useState();
    
   function showNotificationHandler(notificationData) {
    setActiveNotification(notificationData);
   }

   function hideNotificationHandler() {
    setActiveNotification(null);
   }
  
    const context = { 
        notification : activeNotification,
        showNotification: showNotificationHandler,
        hideNotification: hideNotificationHandler
    };
    

    return (
        <NotificationContextProvider value={context}>
            {props.children}
        </NotificationContextProvider>
    )
}

export default NotificationContext;