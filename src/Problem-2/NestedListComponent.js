import React, { useState } from "react";
import styled from "styled-components";

const StyledListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  &::before {
    content: ${({ hasSubItems, isOpen }) =>
      hasSubItems ? (isOpen ? '"\\25BC"' : '"\\25B6"') : '""'};
    font-size: 14px;
    margin-right: 10px;
  }
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
`;

// const StyledListItem = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   padding: 5px;
//   cursor: pointer;
// `;

const StyledListText = styled.div`
  font-size: 14px;
  margin-left: 10px;
`;

const StyledSubList = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: ${({ multipleSubItems }) =>
    multipleSubItems ? "column" : "row"};
  margin-left: 100px;
`;

const NestedListComponent = ({ items }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleItemClick = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([index]);
    }
  };

  return (
    <StyledColumn>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        const hasSubItems = Boolean(item.subItems);
        const multipleSubItems = hasSubItems && item.subItems.length > 1;
        const handleClick = () => {
          if (isOpen) {
            setOpenIndexes(openIndexes.filter((i) => i !== index));
          } else {
            setOpenIndexes([index]);
          }
        };
        return (
          <div key={index}>
            <StyledListItem onClick={handleClick}>
              {hasSubItems && (
                <div>
                  {isOpen ? (
                    <i className="fa fa-caret-down"></i>
                  ) : (
                    <i className="fa fa-caret-right"></i>
                  )}
                </div>
              )}
              <StyledListText>{item.text}</StyledListText>
            </StyledListItem>
            {hasSubItems && (
              <StyledSubList
                isOpen={isOpen}
                multipleSubItems={multipleSubItems}
              >
                <NestedListComponent items={item.subItems} />
              </StyledSubList>
            )}
          </div>
        );
      })}
    </StyledColumn>
  );
};

export default NestedListComponent;
