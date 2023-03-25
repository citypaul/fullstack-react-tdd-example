import { Button, Dialog, Group, Text, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export const InaccessibleModalExample = () => {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <Group position="center">
        <Button onClick={toggle}>Toggle Inaccessible Modal</Button>
      </Group>

      <Dialog opened={opened} withCloseButton onClose={close} size="lg" radius="md">
        <Text size="sm" mb="xs" weight={500}>
          Subscribe to email newsletter
        </Text>

        <TextInput placeholder="hello@gluesticker.com" sx={{ flex: 1 }} />
        <Button onClick={close}>Subscribe</Button>
      </Dialog>
    </>
  );
};
