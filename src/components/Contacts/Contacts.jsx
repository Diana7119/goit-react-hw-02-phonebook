import styles from './Contacts.module.css';

export const Contacts = ({ contacts, deleteContact, children }) => {
  return (
    <>
      {children}
      <ul className={styles.list}>
        {contacts.map(({ name, number, id }) => {
          return (
            <li
              className={styles.item}
              key={id}
              id={id}
              onClick={deleteContact}
            >
              {name}: {number}
              <button type="button">Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
