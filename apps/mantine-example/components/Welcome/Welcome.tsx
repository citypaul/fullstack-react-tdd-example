import { Anchor, Text, Title } from '@mantine/core';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        <Text inherit variant="gradient" component="span">
          Modal component Example
        </Text>
      </Title>
      <Text size="lg" mt="xl">
        To demonstrate the advantages of accessible modals, we have prepared two buttons on this
        page. The first button will open a modal with a focus lock, adhering to the accessibility
        guidelines, while the second button will open a modal without it. You will be able to see
        the subtle differences between the two and appreciate the importance of accessibility in UI
        components.{' '}
      </Text>
      <Text size="lg" my="xl">
        For more information on accessible modals and the guidelines we are following, please refer
        to the{' '}
        <Anchor
          href="https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/"
          size="lg"
          target={'_blank'}
        >
          W3C ARIA Guidelines for Accessible Modals.
        </Anchor>
      </Text>
    </>
  );
}
