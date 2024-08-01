import { Link } from "react-router-dom";
import { Pages } from "../../pages/types";
import { PageContainer } from "../atoms/container";
import { P } from "../atoms/typography";

function Header() {
  return (
    <header className="h-20 flex items-center border-b">
      <PageContainer className="flex justify-between">
        <div className="flex flex-row justify-center items-center space-x-2">
          <Link to={Pages.HOME}>
            <P className="font-bold text-2xl md:text-3xl text-red-600">
              Super Hero Selection
            </P>
          </Link>
        </div>
        <nav className="flex flex-row space-x-4 items-center">
          <Link to={Pages.HOME}>
            <P>Home</P>
          </Link>
          <Link to={Pages.ABOUT}>
            <P>About</P>
          </Link>
        </nav>
      </PageContainer>
    </header>
  );
}

export default Header;
