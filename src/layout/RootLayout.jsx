import Header from "./header";
import { node } from "prop-types";

function RootLayout({ children }) {
  return (
    <div>
      <Header />
      <main className="mx-auto max-w-3xl p-3">{children}</main>
    </div>
  );
}

RootLayout.propTypes = {
  children: node.isRequired,
};

export default RootLayout;
