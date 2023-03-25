import { Anchor, Text, Title } from '@mantine/core';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        Modal component{' '}
        <Text inherit variant="gradient" component="span">
          Example
        </Text>
      </Title>
      <Text color="dimmed" size="lg" mt="xl">
        React's compositional power allows us to build accessible, reusable components with ease.
        Here we will take a look at the {`<Modal />`} from the Mantine React UI library. This
        component adheres to the W3C's accessibility guidelines, ensuring compatibility with screen
        readers and providing an inclusive user experience.
      </Text>
      <Text color="dimmed" size="lg" mt="xl">
        By reusing the Mantine {`<Modal />`}, we benefit from its built-in accessibility features,
        such as focus lock, without having to implement them ourselves. As a consumer of this
        library, we can easily rearrange child components inside the modal without modifying the
        component's API.{' '}
      </Text>
      <Text color="dimmed" size="lg" mt="xl">
        To demonstrate the advantages of accessible modals, we have prepared two buttons on this
        page. The first button will open a modal with a focus lock, adhering to the accessibility
        guidelines, while the second button will open a modal without it. You will be able to see
        the subtle differences between the two and appreciate the importance of accessibility in UI
        components.{' '}
      </Text>
      <Text color="dimmed" size="lg" my="xl">
        For more information on accessible modals and the guidelines we are following, please refer
        to the{' '}
        <Anchor
          href="https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/"
          size="lg"
          target={'_blank'}
        >
          W3C ARIA Guidelines for Accessible Modals.
        </Anchor>
      </Text>
    </>
  );
}
