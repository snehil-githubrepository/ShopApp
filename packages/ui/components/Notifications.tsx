import React, { useState, useEffect } from "react";

interface NotificationProps {
  message: string;
  type: "info" | "success" | "warning" | "error";
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  message,
  type,
  onClose,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Automatically close the notification after a few seconds (adjust as needed)
    const timeout = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [onClose]);

  return (
    <div
      className={`
        ${
          type === "info"
            ? "bg-blue-100 text-blue-800"
            : type === "success"
            ? "bg-green-100 text-green-800"
            : type === "warning"
            ? "bg-yellow-100 text-yellow-800"
            : "bg-red-100 text-red-800"
        }
        fixed bottom-4 right-4 z-50 p-4 rounded-lg shadow-md transition-all duration-300
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      {message}

      <button
        onClick={() => {
          setVisible(false);
          onClose();
        }}
        className="ml-4 font-bold"
      >
        X
      </button>
    </div>
  );
};

export default Notification;

{
  /* <Notification
  message="Your order has been successfully placed."
  type="success"
  onClose={() => handleNotificationClose()}
/> */
}
