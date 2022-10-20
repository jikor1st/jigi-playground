import { useEffect, useRef } from "react";
export const AccessibilityPage = () => {
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!h1Ref.current) return;
    h1Ref.current.focus();
  }, []);
  return (
    <div>
      <h1 tabIndex={0} ref={h1Ref}>
        focus this
      </h1>
      <p>testseteset</p>
      <input />
    </div>
  );
};
