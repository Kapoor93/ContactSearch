import React, { useState } from "react";
import ContactsGrid from "./Components/ContactTable";
import SearchFilter from "./Components/SearchFilter";
import PageNavigation from "./Components/Pagination";
import ContactInfo from "./Components/ContactDetails";
import "./App.css";

const App = () => {
  const contactData = require("./Data/contactList.json");

  const [filterCriteria, setFilterCriteria] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const [filteredContacts, setFilteredContacts] = useState(contactData);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleFilterChange = (field, value) => {
    setFilterCriteria({ ...filterCriteria, [field]: value });
  };

  const handleSearch = () => {
    const updatedContacts = contactData.filter((contact) => {
      return (
        (contact.firstName || "")
          .toLowerCase()
          .includes(filterCriteria.firstName.toLowerCase()) &&
        (contact.lastName || "")
          .toLowerCase()
          .includes(filterCriteria.lastName.toLowerCase()) &&
        (contact.email || "")
          .toLowerCase()
          .includes(filterCriteria.email.toLowerCase()) &&
        (contact.phone || "")
          .toLowerCase()
          .includes(filterCriteria.phone.toLowerCase()) &&
        (filterCriteria.dob ? contact.dob === filterCriteria.dob : true) &&
        (contact.address || "")
          .toLowerCase()
          .includes(filterCriteria.address.toLowerCase()) &&
        (contact.city || "")
          .toLowerCase()
          .includes(filterCriteria.city.toLowerCase()) &&
        (contact.state || "")
          .toLowerCase()
          .includes(filterCriteria.state.toLowerCase()) &&
        (contact.zip || "")
          .toLowerCase()
          .includes(filterCriteria.zip.toLowerCase())
      );
    });

    setFilteredContacts(updatedContacts);
    setCurrentPage(1);
    setSelectedContact(null);
  };

  const handleClearFilters = () => {
    setFilterCriteria({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dob: "",
      address: "",
      city: "",
      state: "",
      zip: "",
    });
    setFilteredContacts(contactData);
    setCurrentPage(1);
    setSelectedContact(null);
  };

  const pageSize = 2;
  const totalPages = Math.ceil(filteredContacts.length / pageSize);
  const displayedContacts = filteredContacts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="main-container">
      <header>
        <h1>Choose a contact:</h1>
        <p>Search for a contact:</p>
      </header>
      <div className="search-table-container">
        <SearchFilter
          filterValues={filterCriteria}
          onFilterChange={handleFilterChange}
          onSearchClick={handleSearch}
          onResetClick={handleClearFilters}
        />
        <ContactsGrid
          data={displayedContacts}
          onSelect={(contact) => setSelectedContact(contact)}
        />
        <PageNavigation
          activePage={currentPage}
          totalPageCount={totalPages}
          onPageSwitch={setCurrentPage}
        />
        <ContactInfo selectedContact={selectedContact} />
      </div>
    </div>
  );
};

export default App;
