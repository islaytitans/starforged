import { FC, Fragment } from "react";

const Layout: FC = ({ children }) => {
  return (
    <Fragment>
      <main className="mx-auto max-w-full">{children}</main>
    </Fragment>
  );
};

export default Layout;
