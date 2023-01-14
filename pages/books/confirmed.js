import BackLink from "../../src/components/BackLink";
import Confirmed from "../../src/components/Confirmed";
import PageHeading from "../../src/components/PageHeading";

export default function ConfirmedPage() {
  return (
    <div className="flex flex-col gap-8 items-center">
      <BackLink href="/">Home</BackLink>

      <PageHeading>Thankyou, enjoy your cookies!</PageHeading>

      <div className="h-80 w-80">
        <Confirmed />
      </div>
    </div>
  );
}
