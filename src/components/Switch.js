import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import React from "react";
import wrapCustomElement from "@shoelace-style/react-wrapper";

const ShoelaceButton = wrapCustomElement("sl-button");
const ShoelaceIcon = wrapCustomElement("sl-icon");

export default function Switch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleLight = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="absolute top-0 right-0 p-3" onClick={toggleLight}>
      <sl-theme name={theme === "light" ? "dark" : "light"}>
        <ShoelaceButton>
          <ShoelaceIcon name="lightning-fill"></ShoelaceIcon>
        </ShoelaceButton>
      </sl-theme>
    </div>
  );
}
