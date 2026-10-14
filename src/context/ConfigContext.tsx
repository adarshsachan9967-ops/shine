"use client";

import React, { createContext, useContext } from "react";
import { SITE_CONFIG, SiteConfig } from "@/data/config";

const ConfigContext = createContext<SiteConfig>(SITE_CONFIG);

export function ConfigProvider({
  config,
  children,
}: {
  config: SiteConfig;
  children: React.ReactNode;
}) {
  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  );
}

export function useSiteConfig(): SiteConfig {
  return useContext(ConfigContext);
}
