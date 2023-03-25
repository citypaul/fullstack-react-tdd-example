import { Button } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { ModalExample } from '../components/ModalExample/ModalExample';
import { Welcome } from '../components/Welcome/Welcome';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <Button>Hello there!</Button>
      <ModalExample />
    </>
  );
}
