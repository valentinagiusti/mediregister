import { ReactNode } from "react";
import NavActions from "../components/patients/nav-actions";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto">
      <NavActions />
      <div className="flex-grow">
        {children}
      </div>
    </div>
  );
}
