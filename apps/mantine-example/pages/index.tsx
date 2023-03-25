import { Button, Text, Timeline } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { InaccessibleModalExample } from '../components/InaccessibleModalExample/InaccessibleModalExample';
import { ModalExample } from '../components/ModalExample/ModalExample';
import { Welcome } from '../components/Welcome/Welcome';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <InaccessibleModalExample />
    </>
  );
}
