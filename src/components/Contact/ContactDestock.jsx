import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import ContactCV from './ContactMobile';
import "./Contact.css";

const ContactDestock = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret id="BtnContactDestock">
        Contact
        </DropdownToggle>
      <DropdownMenu>
        <ContactCV />
      </DropdownMenu>
    </Dropdown>
  );
}

export default ContactDestock;