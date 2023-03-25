import { Button, Flex, Group, Modal, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export const AccessibleModalExample = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="This is an accessible modal"
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        <Flex direction={'column'} gap="md">
          <TextInput placeholder="Your name" label="Full name" withAsterisk />
          <TextInput placeholder="Your email address" label="Email address" withAsterisk />
          <TextInput placeholder="Your name" label="Full name" withAsterisk />
          <Button>Do something</Button>
        </Flex>
      </Modal>

      <Group position="center">
        <Button onClick={open}>Open Modal</Button>
      </Group>
    </>
  );
};
