import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filter/selectors';
import { setFilter } from '../../redux/filter/slice';

const Filter = () => {

  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  return (
    <div className={css.container}>
      <label className={css.filterLabel}>Find contacts by name </label>
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        placeholder="Enter name"
        value={filterValue}
        onChange={event => dispatch(setFilter(event.target.value.trim()))}
      />
    </div>
  )
};

export default Filter;

