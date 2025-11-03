export default function MemberCard({ name, role, contact, image }) {
  return (
    <div className="bg-pharosBlue/10 border border-pharosBlue rounded-2xl p-5 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all text-center">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-3 border-2 border-pharosGold object-cover"
      />
      <h3 className="text-lg font-semibold text-pharosGold">{name}</h3>
      <p className="text-gray-300">{role}</p>
      <a
        href={`https://x.com/${contact.replace("@", "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-pharosBlue hover:underline text-sm mt-2 inline-block"
      >
        {contact}
      </a>
    </div>
  );
}
