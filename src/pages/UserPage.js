import { useEffect, useState } from "react";

import Body from "../components/Body";
import Image from "react-bootstrap/Image";
import Spinner from "react-bootstrap/Spinner";
import Stack from "react-bootstrap/Stack";
import { useApi } from "../contexts/ApiProvider";
import { useParams } from "react-router-dom";

export default function UserPage() {
  const { username } = useParams();
  const [user, setUser] = useState();
  const api = useApi();

  useEffect(() => {
    (async () => {
      const response = await api.get("/users/" + username);
      setUser(response.ok ? response.body : null);
    })();
  }, [username, api]);

  return (
    <Body seconaryNav>
      {user === undefined ? (
        <Spinner animation="border" />
      ) : (
        <>
          {user === null ? (
            <p>User not found.</p>
          ) : (
            <Stack direction="horizontal" gap={4}>
              <Image src={user.avatar_url + "&s=128"} roundedCircle />
              <div>
                <h1>{user.username}</h1>
              </div>
            </Stack>
          )}
        </>
      )}
    </Body>
  );
}
