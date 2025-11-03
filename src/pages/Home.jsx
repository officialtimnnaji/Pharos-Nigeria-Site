import { events } from "../data/events";
import EventCard from "../components/EventCard";

export default function Home() {
  return (
    <section className="p-8 text-center">
      <h2 className="text-3xl font-bold text-pharosGold mb-6">
        Weekly Pharos Nigeria Events
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </section>
  );
}

import { members } from "../data/members";
import MemberCard from "../components/MemberCard";

// Inside the return, right below the events section:
<section className="p-8 text-center mt-10">
  <h2 className="text-3xl font-bold text-pharosGold mb-6">
    Meet Our Community Members
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {members.map((member) => (
      <MemberCard key={member.id} {...member} />
    ))}
  </div>
</section>
