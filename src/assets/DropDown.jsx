import { Dropdown, DropdownButton } from "react-bootstrap";

function DropDown(props) {
  console.log("dropdown", props.dropDownActions);
  const dropDowns = [props.dropDownActions];
  return (
    <div>
      <DropdownButton
        variant="secondary"
        id="dropdown-basic-button"
        title="Select Option"
      >
        {dropDowns.length > 0
          ? dropDowns.map((action, index) => (
              <Dropdown.Item key={index}>{action}</Dropdown.Item>
            ))
          : null}
      </DropdownButton>
    </div>
  );
}

export default DropDown;
