import PropTypes from 'prop-types';
import css from '../Transaction/Transaction.module.css';

export default function TransactionHistory(props) {
  const { items } = props;
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.tableHead}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={css.tableItem} key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
