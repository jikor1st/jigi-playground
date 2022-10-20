// modules
import React from "react";
import { NamedLazy } from "../module";

// pages
const { TextLibraryPage, AccessibilityPage, NotFoundPage } = NamedLazy(
  () => import("../../pages"),
  350
);

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
  {
    path: "accessibility",
    element: AccessibilityPage,
    nav: "접근성 테스트 페이지",
  },
  {
    path: "*",
    element: NotFoundPage,
    nav: "404",
  },
];

export { ROUTES };
