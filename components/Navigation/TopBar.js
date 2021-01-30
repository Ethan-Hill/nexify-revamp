import NavArrows from "./Items/TopBar/NavArrows";
import Account from "./Items/TopBar/Account";
import Logo from "./Items/TopBar/Logo";

export default function TopBar() {
  return (
    <div className="absolute top-0 flex items-center w-full h-24">
      <Account />
    </div>
  );
}
