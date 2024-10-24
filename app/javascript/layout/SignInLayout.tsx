import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const SignInLayout: React.FC<LayoutProps> = ({ children, ...rest }) => {
  return (
    <div className="container relative flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <header>
        <h1>Sign In Page</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>Footer Content</p>
      </footer>
    </div>
  );
};

export default SignInLayout;
