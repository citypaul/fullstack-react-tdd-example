import { Anchor, Button, Flex, Group, Text, Timeline } from '@mantine/core';
import {
  AccessibleModalExample,
  ModalExample,
} from '../components/AccessibleModalExample/AccessibleModalExample';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { InaccessibleModalExample } from '../components/InaccessibleModalExample/InaccessibleModalExample';
import { Welcome } from '../components/Welcome/Welcome';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <Flex justify={'center'} align="center" direction={'column'} gap="md">
        <Anchor href="https://mantine.dev/core/dialog/" target={'_blank'}>
          Mantine docs (Dialog component)
        </Anchor>
        <InaccessibleModalExample />
        <Anchor href="https://mantine.dev/core/modal/" target={'_blank'}>
          Mantine docs (Modal component)
        </Anchor>
        <AccessibleModalExample />
      </Flex>
    </>
  );
}
