import { FC, Fragment } from "react";
import Header from "../global/Header";

const Layout: FC = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className="mx-auto max-w-full font-mono">{children}</main>
    </Fragment>
  );
};

export default Layout;
