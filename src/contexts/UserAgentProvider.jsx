"use client";

import { createContext, useContext } from "react";

const UserAgentContext = createContext(undefined);

export default function UserAgentProvider({ reqUserAgent, children }) {
  return <UserAgentContext value={reqUserAgent}>{children}</UserAgentContext>;
}

export const useIsMobile = () => {
  const userAgent = useContext(UserAgentContext);
  if (!userAgent) {
    throw new Error("useIsMobile must be used within a UserAgentProvider");
  }

  return userAgent.device.type === "mobile";
};
