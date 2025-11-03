import { members } from "../data/members";
import MemberCard from "../components/MemberCard";

export default function Community() {
  return (
    <section className="p-8 text-center">
      <h2 className="text-3xl font-bold text-pharosGold mb-6">
        Meet Our Community Members
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((member) => (
          <MemberCard key={member.id} {...member} />
        ))}
      </div>
    </section>
  );
}
