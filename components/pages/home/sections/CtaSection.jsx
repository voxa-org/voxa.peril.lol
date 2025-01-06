import styled from 'styled-components';
import Image from 'next/image';
import Typography from '@/components/common/Typography';
import { Section, Stack } from '@/components/common/layout';
import { ArrowDownCircle } from "react-feather"

const StyledSection = styled(Section)`
  background-color: #f5f5f7;
  /* color: #1d1d1f; */
  background-color: var(--background-tertiary-color);
  /* color: var(--glyph-gray-tertiary); */
  a {
    color: var(--glyph-blue);
    :hover {
      text-decoration: underline;
    }
  }
`;

export default function CtaSection() {
  return (
    <StyledSection contained gutterTop>
      <Stack gap align="center">
        <Image
          width={104}
          height={104}
          src="/product-icon.png"
          alt="Voxa product icon"
        />
        <Stack align="center" gap={1}>
          <Typography variant="eyebrow-super">Get started</Typography>
          <Typography variant="body">Download Voxa and see for yourself!</Typography>
          <Typography variant="body" as="a" href="#">Download Voxa <ArrowDownCircle size="1em" style={{ verticalAlign: "middle"}} /></Typography>
        </Stack>
      </Stack>
    </StyledSection>
  );
}
