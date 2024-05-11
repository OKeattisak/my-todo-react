import { useEffect, useState } from "react";
import { Divider, Badge, Image, Text, Card, Button, Group } from "@mantine/core";
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
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src={profile.pictureUrl}
                height={300}
                alt={profile.displayName}
              />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>{profile.displayName}</Text>
              <Badge color="green">Online</Badge>
            </Group>

            <Text size="sm" c="dimmed">
              {profile.statusMessage}
            </Text>
          </Card>
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
