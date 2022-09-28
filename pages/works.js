import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import ThumbNazaries from '../public/images/works/nazaries_thumb.png'
import ThumbCamaloon from '../public/images/works/camaloon_thumb.png'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
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
  )
}

export default Works
