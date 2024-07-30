import { ReactNode } from "react";
import { PageContainer } from "../components/atoms/containers";
import Header from "../components/organisms/header";

function PrimaryLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <PageContainer className="pt-8">
        <main>{children}</main>
      </PageContainer>
    </>
  );
}

export default PrimaryLayout;
