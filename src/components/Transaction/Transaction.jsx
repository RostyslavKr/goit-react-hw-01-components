import PropTypes from 'prop-types';
import {
  Transaction,
  TableHead,
  TableItem,
  TableHeadIcon,
  TableDataIcon,
} from './Transaction.styled';

export default function TransactionHistory(props) {
  const { items } = props;
  return (
    <Transaction>
      <thead>
        <TableHead>
          <TableHeadIcon>Type</TableHeadIcon>
          <TableHeadIcon>Amount</TableHeadIcon>
          <TableHeadIcon>Currency</TableHeadIcon>
        </TableHead>
      </thead>

      <tbody>
        {items.map(item => (
          <TableItem key={item.id}>
            <TableDataIcon>{item.type}</TableDataIcon>
            <TableDataIcon>{item.amount}</TableDataIcon>
            <TableDataIcon>{item.currency}</TableDataIcon>
          </TableItem>
        ))}
      </tbody>
    </Transaction>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
