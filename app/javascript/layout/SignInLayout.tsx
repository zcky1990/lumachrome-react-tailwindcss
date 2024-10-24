import React from "react";

import { Nav } from "../components/Nav";
import { Inbox } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const SignInLayout: React.FC<LayoutProps> = ({ children, ...rest }) => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Nav
        links={[
          {
            title: "Inbox",
            label: "128",
            icon: Inbox,
            variant: "default",
          },
        ]}
      />
      {children}
    </div>
  );
};

export default SignInLayout;
