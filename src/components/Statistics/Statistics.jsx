import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';
import getRandomHexColor from 'getRandomColor';
export default function Statistics(props) {
  const { title, stats } = props;

  return (
    <section className={css.statistics}>
      {title == null ? null : <h2 className={css.title}>Upload stats</h2>}

      <ul className={css.statList}>
        {stats.map(data => (
          <li
            style={{
              backgroundColor: getRandomHexColor(),
            }}
            key={data.id}
            className={css.item}
          >
            <span className={css.label}>{data.label}</span>
            <span className={css.percentage}>{data.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
