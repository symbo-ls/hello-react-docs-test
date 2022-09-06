"use strict";

import React from "react";
import { set } from "@symbo.ls/scratch";
import CONFIG_DEFAULT from '@symbo.ls/config-default'
import { init } from "@symbo.ls/init";

const context = /*#__PURE__*/ React.createContext({
  config: {},
});
const Provider = context.Provider;

export const SymbolsProvider = ({ config, children }) => {
  const defaultConfig = config || CONFIG_DEFAULT

  React.useEffect(() => {
    set(defaultConfig)
  }, []) 

  return /*#__PURE__*/ React.createElement(
    Provider,
    {
        value: {
            config: config,
          },
    },
    children
  );
};
