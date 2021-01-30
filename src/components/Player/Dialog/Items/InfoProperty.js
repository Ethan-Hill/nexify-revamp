import { useEffect } from "react";

export default function InfoTitle({ title, name }) {
  useEffect(() => {
    const tooltip = document.getElementById("tooltip");

    tooltip.addEventListener("sl-show", () => {
      setTimeout(() => {
        tooltip.hide();
      }, 2000);
    });
  });

  const handleClick = () => {
    navigator.clipboard.writeText(name);
  };

  if (title === "ID") {
    return (
      <div className="text-center">
        <h1 className="text-xl font-bold">{title}</h1>
        <div className="flex items-center">
          <h1 className="mb-3 text-base">{name}</h1>
          <sl-tooltip content="Copied!" trigger="click" id="tooltip">
            <div className="mb-2 text-lg" onClick={handleClick}>
              <sl-icon-button name="clipboard" label="Copy"></sl-icon-button>
            </div>
          </sl-tooltip>
        </div>
      </div>
    );
  }
  return (
    <div className="text-center">
      <h1 className="text-xl font-bold">{title}</h1>
      <h1 className="mb-3">{name}</h1>
    </div>
  );
}
