import { useMemo } from 'react';
import { Feather, GitHub, Info, Layout, Sliders, Tool, Zap } from 'react-feather';
import Tile from '@/components/common/Tile';
import Typography from '@/components/common/Typography';
import { Grid, GridItem, Section, Stack } from '@/components/common/layout';
import { useSite } from '@/components/common/Site';

const IntroFeaturesSection = () => {
  const { breakpoint } = useSite();

  const gap = useMemo(() => breakpoint === 'xs' ? 24 : 40, [breakpoint])
  
  return (
    <Section contained gutterBottom={20} variant="secondary">
      <Grid columns={{ xs: 1, lg: 2 }} gap={{ xs: 6, lg: 12 }}>
        <GridItem as={Tile} width={{ xs: 1, lg: 2 }}>
          <Stack direction={breakpoint === 'xs' ? "vertical" : "horizontal"} gap={3.5} >
            <div>
              <Info size={28} /> 
            </div>
            <Typography variant="intro">
              Voxa is crafted to complement, not replace, Discord's Official client, offering an alternative specifically for Apple platforms. Our goal is to provide every user with an exceptional experience and improved performance.
            </Typography>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack>
            <Zap size={gap} />
            <Typography variant="intro" gutterTop>Written in Swift<sup>5</sup></Typography>
            <Typography variant="intro" style={{ opacity: .5 }}>
              Experience the full power of your Mac with Voxa, built entirely with a native Swift architecture for seamless performance and efficiency.
            </Typography>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack>
            <Feather size={gap} />
            <Typography variant="intro" gutterTop>
              Lightweight Yet Powerful
            </Typography>
            <Typography variant="intro" style={{ opacity: .5 }}>
              Designed to be fast and smooth, making Voxa a joy to use. 
            </Typography>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack>
            <GitHub size={gap} />
            <Typography variant="intro" gutterTop>
              Completely Open Source
            </Typography>
            <Typography variant="intro" style={{ opacity: .5 }}>
              Voxa is built by developers for developers. Have suggestions or want a new feature? Simply open an issue or submit a pull request.
            </Typography>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack>
            <Sliders size={gap} />
            <Typography variant="intro" gutterTop>
              Fully Featured
            </Typography>
            <Typography variant="intro" style={{ opacity: .5 }}>
              Voxa is packed with all your favorite features of your *old* Discord client, but with a fresh new look and feel.
            </Typography>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack>
            <Layout size={gap} />
            <Typography variant="intro" gutterTop>
              Familiar &amp; Intuitive User Interface
            </Typography>
            <Typography variant="intro" style={{ opacity: .5 }}>
              Voxa's UI is designed to be familiar and intuitive, Meaning no new learning.
            </Typography>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack>
            <Tool size={gap} />
            <Typography variant="intro" gutterTop>
              Easy Installer
            </Typography>
            <Typography variant="intro" style={{ opacity: .5 }}>
              We provide an easy-to-use installer for even the *clumsiest* of users. 
            </Typography>
          </Stack>
        </GridItem>
      </Grid>
    </Section>
  );
}

export default IntroFeaturesSection;
