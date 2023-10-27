import React from "react";

interface ProfilePageProps {
  username: string;
  email: string;
  role: string; // You can use a more specific role type if needed
  // Add more profile-related information as needed
  orderHistory: Array<{ orderId: string; date: string; total: number }>;
  // Add more profile-related information here, e.g., address, payment methods, etc.
}

const Profile: React.FC<ProfilePageProps> = ({
  username,
  email,
  role,
  orderHistory,
}) => {
  return (
    <div className="container mx-auto p-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4">My Profile</h1>
        <div className="mb-4">
          <strong>Username:</strong> {username}
        </div>
        <div className="mb-4">
          <strong>Email:</strong> {email}
        </div>
        <div className="mb-4">
          <strong>Role:</strong> {role}
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Order History</h2>
          <ul>
            {orderHistory.map((order, index) => (
              <li key={index}>
                <strong>Order ID:</strong> {order.orderId}
                <br />
                <strong>Date:</strong> {order.date}
                <br />
                <strong>Total:</strong> ${order.total.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
        {/* Add more profile-related information here as needed */}
      </div>
    </div>
  );
};

export default Profile;

/* <ProfilePage
  username="JohnDoe"
  email="johndoe@example.com"
  role="Customer"
  orderHistory={[
    { orderId: '123456', date: '2023-10-01', total: 99.99 },
    { orderId: '789012', date: '2023-10-15', total: 49.99 },
  ]}
/> */
