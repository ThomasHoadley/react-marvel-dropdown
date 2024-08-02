import { ReactNode } from "react";
import { PageContainer } from "../components/atoms/container";
import Header from "../components/organisms/header";

function PrimaryLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <PageContainer className="pt-8 h-screen">
        <main>{children}</main>
      </PageContainer>
    </>
  );
}

export default PrimaryLayout;
