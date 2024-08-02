import { Dispatch, SetStateAction } from "react";
import Button from "../../../components/atoms/button";
import { P } from "../../../components/atoms/typography";
import PageTitle from "../../../components/molecules/page-title";

function MissionIntro({
  setMissionAccepted,
}: {
  setMissionAccepted: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="text-xl text-center w-[400px] mx-auto space-y-8">
      <PageTitle text="Private & Confidential" />
      <P>
        Your mission, should you choose to accept it, is to select a crack team
        of super heroes to save the world. Do you accept?
      </P>
      <Button onClick={() => setMissionAccepted(true)}>I accept</Button>
    </div>
  );
}

export default MissionIntro;
