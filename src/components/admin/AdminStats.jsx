import {
  Users,
  ClipboardList,
  Hotel,
  Plane,
  Mail,
  Star,
  Package,
  
} from "lucide-react";

function AdminStats({
  users,
  hotelBookings,
  flightBookings,
  enquiries,
  reviews,
  packageList,
  averageRating,
}) {
  const stats = [
    {
      title: "Users",
      value: users.length,
      icon: Users,
    },
    {
      title: "Total Bookings",
      value: hotelBookings.length + flightBookings.length,
      icon: ClipboardList,
    },
    {
      title: "Hotel Bookings",
      value: hotelBookings.length,
      icon: Hotel,
    },
    {
      title: "Flight Bookings",
      value: flightBookings.length,
      icon: Plane,
    },
    {
      title: "Enquiries",
      value: enquiries.length,
      icon: Mail,
    },
    {
      title: "Reviews",
      value: reviews.length,
      icon: Star,
    },
    {
      title: "Average Rating",
      value: `${averageRating}/5`,
      icon: Star,
    },
    {
      title: "Travel Packages",
      value: packageList.length,
      icon: Package,
    },
  ];

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
              <Icon className="h-6 w-6" />
            </div>

            <p className="mt-4 text-sm font-medium uppercase tracking-wide text-gray-500">
              {stat.title}
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              {stat.value}
            </h2>
          </div>
        );
      })}
    </div>
  );
}

export default AdminStats;