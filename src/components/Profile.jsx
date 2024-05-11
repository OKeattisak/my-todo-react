import { useEffect, useState } from "react";
import { Divider, Badge, Image, Text } from "@mantine/core";
import liff from "@line/liff";


export default function Profile() {

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [profile, setProfile] = useState("");

  useEffect(() => {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID
      })
      .then(() => {
        setMessage("LIFF init succeeded.");
        if (!liff.isLoggedIn()) {
          liff.login();
        }

        liff.getProfile().then((data) => {
          setProfile(data)
        }).catch((err) => {

        })
      })
      .catch((e) => {
        setMessage("LIFF init failed.");
        setError(`${e}`);
      });
  }, []);

  return (
    <>
      {profile &&
        <div>
          <p>{profile.displayName}</p>
          <Badge color="blue">{profile.statusMessage}</Badge>
          <Image
            radius="md"
            src={profile.pictureUrl}
          />
        </div>
      }
      {error && (
        <p>
          <code>{error}</code>
        </p>
      )}
    </>
  );
}
