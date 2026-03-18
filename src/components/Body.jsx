import Container from "react-bootstrap/Container";
import FlashMessage from "./FlashMessage";
import SeconaryNav from "./SecondaryNav";
import Sidebar from "./Sidebar";
import Stack from "react-bootstrap/Stack";

export default function Body({ seconaryNav, children }) {
  return (
    <div className="mt-3 ms-3 me-3">
      {/* <Stack direction="horizontal" className="Body">
        {sidebar && <Sidebar />}
        <div className="Content">
          <FlashMessage />
          {children}
        </div>
      </Stack>*/}
      {seconaryNav && <SeconaryNav />}
      <div className="Content">
        <FlashMessage />
        {children}
      </div>
    </div>
  );
}
