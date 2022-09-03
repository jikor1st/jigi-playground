// modules
import React from "react";
import { NamedLazy } from "../module";

// pages
const { TextLibraryPage } = NamedLazy(() => import("../../pages"), 350);

type RoutesItemType = {
  path: string;
  element: React.FC;
  nav: string;
};

const ROUTES: RoutesItemType[] = [
  {
    path: "text-library",
    element: TextLibraryPage,
    nav: "텍스트 라이브러리 페이지",
  },
];

export { ROUTES };
