export default function EventCard({ title, day, host, description, guideLink }) {
  return (
    <div className="bg-pharosBlue/10 border border-pharosBlue rounded-2xl p-5 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all">
      <h3 className="text-xl font-bold text-pharosGold mb-2">{title}</h3>
      <p className="text-gray-300"><span className="font-semibold text-nigeriaGreen">{day}</span> • Hosted by {host}</p>
      <p className="mt-2 text-gray-400">{description}</p>
      <a
        href={guideLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 text-sm text-pharosBlue font-semibold hover:underline"
      >
        View Guide →
      </a>
    </div>
  );
}
