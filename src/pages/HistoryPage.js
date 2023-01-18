import Body from "../components/Body";
import Translations from "../components/Translations";
import { useParams } from "react-router-dom";

export default function HistoryPage() {
  const { start, end } = useParams();
  return (
    <Body seconaryNav>
      <Translations start={start} end={end} />
    </Body>
  );
}
