import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'
import ThumbNazaries from '../public/images/jobs/nazaries_thumb.png'
import ThumbCamaloon from '../public/images/jobs/camaloon_thumb.png'

const Jobs = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Jobs
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="nazaries"
              title="Nazaries IT"
              thumbnail={ThumbNazaries}
            >
              Software development consultancy and Iot solutions
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="camaloon"
              title="Camaloon"
              thumbnail={ThumbCamaloon}
            >
              Personalized items and gifts.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Jobs
