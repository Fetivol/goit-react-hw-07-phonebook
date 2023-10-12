import {
  List,
  ListElem,
  Button,
} from 'components/ContactsList/ContactsList.styled';
import { Loader } from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectIsLoading, selectVisibleContacts } from 'redux/selectors';

export const ContactsList = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const visibleItems = useSelector(selectVisibleContacts);

  return (
    <>
      {isLoading && <Loader />}
      {visibleItems.length > 0 ? (
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
      )}
    </>
  );
};
