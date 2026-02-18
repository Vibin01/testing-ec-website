import BiWeeklyTextChange from "./common/BiWeeklyTextChange";
import FooterClient from "./FooterClient";

export default async function Footer() {
  return (
    <FooterClient>
      <BiWeeklyTextChange />
    </FooterClient>
  );
}

export const revalidate = 0; 

