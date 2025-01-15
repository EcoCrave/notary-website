import OrderDetails from "./OrderDetails";

const NotificationTable = ({ notifications, role }) => {
  if (!notifications || notifications.length === 0) {
    return <div>Haven't booked any appointement yeat</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b bg-gray-100">
            <th className="p-2 text-left text-gray-600">Order ID</th>
            <th className="p-2 text-left text-gray-600">Status</th>
            <th className="p-2 text-left text-gray-600">Schedule</th>
            <th className="p-2 text-left text-gray-600">Details</th>
          </tr>
        </thead>
        <tbody>
          {notifications.map((item, index) => (
            <tr
              key={index}
              className="bg-white shadow-md border border-gray-200"
            >
              <td className="p-4">{item.id || "N/A"}</td>
              <td className="p-4">
                <span
                  className={`px-2 py-1 rounded ${
                    item.status === "Done"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td className="p-4">{item.time || "N/A"}</td>
              <td className="p-4">
                <OrderDetails role={role} data={item} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NotificationTable;
