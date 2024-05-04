
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Factorial">
      <Container>
        <Title>
          Factorial <Badge>2022</Badge>
        </Title>
        <P>All in one Human resources software</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.factorialhr.com">
              https://www.factorialh.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Ruby on Rails, React
            </span>
          </ListItem>
        </List>
        <WorkImage src="/images/jobs/factorialhr_thumb.png" alt="Factorial" />
      </Container>
    </Layout>
  )
}

export default Work
