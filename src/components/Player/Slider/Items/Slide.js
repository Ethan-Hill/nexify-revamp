export default function Slide({ track }) {
  return (
    <img
      className="w-full h-full"
      src={track.album.images[0].url}
      alt="Track image"
    />
  );
}
