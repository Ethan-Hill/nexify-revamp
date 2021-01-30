export default function InfoTitle({ title, link }) {
  return (
    <div className="text-center">
      <h1 className="mb-3 text-xl font-bold">{title}</h1>
      <sl-button href={link} target="_blank">
        Profile
      </sl-button>
    </div>
  );
}
