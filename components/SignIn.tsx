'use client'
import { useState } from "react";

export const useTheme = () => {
  const [login, setLogin] = useState(false);

  return { login, setLogin };
};
