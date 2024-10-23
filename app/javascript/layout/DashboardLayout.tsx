import React from "react";
import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full flex-row">
      {/* SideBar */}
      <div className="main flex flex-col w-full">
        {/* NavBar */}
        <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
                You can add components and dependencies to your app using the cli.
            </AlertDescription>
            </Alert>
        {/* navbar */}
        { children }
      </div>
    </div>
  );
};

export default DashboardLayout;
