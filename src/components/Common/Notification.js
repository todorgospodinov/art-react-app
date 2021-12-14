
import { useNotificationContext } from '../../contexts/NotificationContext';
import './Notification.css';

const Notification = () => {
    const { notification, hideNotification } = useNotificationContext();

    if (!notification.show) {
        return null;
    }

    return (
        <article className="notification" bg={notification.type} onClose={hideNotification}>
            <div>
                {notification.message}
            </div>
        </article>
    );
};

export default Notification;