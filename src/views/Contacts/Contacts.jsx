import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  fetchContacts,
  selectContacts,
  contactsStatus,
} from "../../features/contact/contactSlice";

import { Table, TableTitle } from "../../components/Blocks/TableBlocks";

import MainContainer from "../../components/MainContainer/MainContainer";

import {
  ListButtonsContainer,
  Selector,
  Selectors,
} from "../../components/Blocks/FilterButtons";

import ContactRow from "../../components/Blocks/ContactsRow";
import Spinner from "../../components/Blocks/Spinner";
import Navigation from "../../components/Navigation/Navigation";
import { ReviewsContainer } from "../Dashboard/DashboardStyled";
import ReviewsSlider from "../../components/Reviews/Reviews_slider";

const Contacts = () => {
  const dispatch = useDispatch();
  const contactsResult = useSelector(selectContacts);
  const appState = useSelector(contactsStatus);

  const [contactStatus, setContactStatus] = useState("");
  const [lengthFromRedux, setLengthFromRedux] = useState(true);
  const [contactsFiltered, setContactsFiltered] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(5);
  const [pagesLength, setPagesLength] = useState(1);
  const [initialIndex, setInitialIndex] = useState(5);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const setAllContacts = () => {
    setLengthFromRedux(true);
    dispatch(fetchContacts());
  };

  const contactsSwitch =  () => {
    if (lengthFromRedux) {
      return contactsResult;
    } else {
      return contactsFiltered;
    }
  };

  console.log('CR', contactsResult)
  console.log('CS', contactsSwitch())
  console.log('CS', typeof(contactsResult));

  return (
    <MainContainer>
      <ReviewsContainer>
        <ReviewsSlider />
      </ReviewsContainer>
      <ListButtonsContainer>
        <Selectors>
          <Selector
            onClick={() => {
              setAllContacts();
            }}
          >
            All Contacts
          </Selector>
          <Selector
            onClick={() => {
              setContactStatus(false);
              setLengthFromRedux(false);
            }}
          >
            Archived
          </Selector>
        </Selectors>
      </ListButtonsContainer>
      <Table>
        <thead>
          <tr>
            <TableTitle> Order Id</TableTitle>
            <TableTitle> Date</TableTitle>
            <TableTitle> Customer</TableTitle>
            <TableTitle> Comment</TableTitle>
            <TableTitle> Action</TableTitle>
          </tr>
        </thead>

        {appState === "pending" && (
          <tbody>
            <tr>
              <td>
                <Spinner />
              </td>
            </tr>
          </tbody>
        )}

        {appState === "fulfilled" && (
          <tbody>
            {
              contactsResult.map((contact, index) =>
                <ContactRow key={contact._id} contact={contact} />
              )
            }
            {console.log('SWITCH',contactsSwitch())}
          </tbody>
        )}
      </Table>

      <Navigation
        info={contactsSwitch()}
        pagesLength={pagesLength}
        setPagesLength={setPagesLength}
        initialIndex={initialIndex}
        setInitialIndex={setInitialIndex}
      />
    </MainContainer>
  );
};

export default Contacts;
