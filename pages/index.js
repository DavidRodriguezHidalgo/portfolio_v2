import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          mb={6}
          p={3}
          align="center"
        >
          Hello, I&apos;m a full-stack developer based in Spain!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              David Rodríguez
            </Heading>
            <p>Developer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/david.jpeg"
              alt="Profile image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            David is a full-stack developer. For backend development I use Ruby
            on Rails and React.js for frontend. What I like is to learn new
            things and keep growing my skills. When not online, he loves bonsai
            care, book reading and playing videogames.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme={'teal'}>
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1990</BioYear>
            Born in Granada, Spain.
          </BioSection>
          <BioSection>
            <BioYear>2014</BioYear>
            Completed Computer Science Degree by Granada&apos;s University.
          </BioSection>
          <BioSection>
            <BioYear>2014</BioYear>
            Worked at Nazaries IT
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Worked at Camaloon
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>Books, Bonsai, Videogames, Photography.</Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
