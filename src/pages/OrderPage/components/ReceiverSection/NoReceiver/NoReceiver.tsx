import { RECEIVER_SECTION_CONSTANTS } from "../../../constants/receiverSection";
import { NoReceiversContent, NoReceiversLabel } from "./NoReceiver.styles.tsx";

function NoReceiver() {
  return (
    <NoReceiversContent>
      <NoReceiversLabel>
        {RECEIVER_SECTION_CONSTANTS.NO_RECEIVERS_MESSAGE}
      </NoReceiversLabel>
      <NoReceiversLabel>
        {RECEIVER_SECTION_CONSTANTS.ADD_RECEIVER_GUIDE}
      </NoReceiversLabel>
    </NoReceiversContent>
  );
}

export default NoReceiver;
