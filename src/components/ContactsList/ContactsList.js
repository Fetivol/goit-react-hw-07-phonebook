import {
  List,
  ListElem,
  Button,
} from 'components/ContactsList/ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);
  const visibleItems = useSelector(selectVisibleContacts);
  return visibleItems.length > 0 ? (
    <List>
      {visibleItems.map(({ id, name, phone }) => {
        return (
          <ListElem key={id}>
            {name}: {phone}
            <Button
              type="button"
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              Delete
            </Button>
          </ListElem>
        );
      })}
    </List>
  ) : (
    <span>We didn't find this person</span>
  );
};
