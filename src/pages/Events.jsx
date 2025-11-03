import { useEffect, useState } from "react";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🟢 Fetch data from your GitHub JSON
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/officialtimnnaji/Pharos-Nigeria-Site/main/src/data/events.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setEvents(data.events || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-gray-400">Loading events...</p>;

  return (
    <div className="min-h-screen bg-pharosDark text-nigeriaWhite px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Upcoming Events</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div key={index} className="bg-white/10 p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-nigeriaGreen">{event.title}</h2>
            <p className="text-gray-300 mt-2">{event.date}</p>
            <p className="mt-4">{event.description}</p>
            <p className="mt-2 text-sm text-gray-400 italic">
              Host: {event.host}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
