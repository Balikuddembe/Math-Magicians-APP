import PropTypes from 'prop-types';

function OutPut({ state }) {
  const { total, next, operation } = state;
  return (
    <div className="output">
      {`${total || ''} ${operation || ''} ${next || ''}`}
    </div>
  );
}

OutPut.propTypes = {
  state: PropTypes.shape.isRequired,
};
export default OutPut;
