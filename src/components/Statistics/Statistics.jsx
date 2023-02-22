import PropTypes from 'prop-types';
import {
  Container,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

export default function Statistics(props) {
  const { title, stats } = props;

  return (
    <Container>
      {title == null ? null : <Title>Upload stats</Title>}

      <StatList>
        {stats.map(data => (
          <Item key={data.id}>
            <Label>{data.label}</Label>
            <Percentage>{data.percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </Container>
  );
}

Statistics.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
