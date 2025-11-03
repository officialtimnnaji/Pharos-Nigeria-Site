import { useEffect, useState } from "react";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch from local JSON
    fetch("/src/data/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Error loading events:", err));
  }, []);

  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold text-pharosGold mb-6 text-center">
        Weekly Events
      </h1>

      {events.length === 0 ? (
        <p className="text-center text-gray-400">Loading events...</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-[#1B1F23] border border-pharosGold/30 rounded-2xl p-5 shadow-lg hover:scale-105 transition-transform"
            >
              <h2 className="text-xl font-semibold text-pharosGold mb-2">
                {event.title}
              </h2>
              <p className="text-sm text-gray-400 mb-2">
                {event.day} • {event.time}
              </p>
              <p className="text-gray-300 mb-3">{event.description}</p>
              <p className="text-sm text-gray-400 italic">Host: {event.host}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
