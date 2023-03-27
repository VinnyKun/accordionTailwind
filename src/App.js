import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import styled from 'styled-components';

const AccordionMenu = styled.div`
  width: 100%;
  background-color: bg-gray-100;
`;

const AccordionItem = styled.div`
  border-bottom: border-gray-200;
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: py-4 px-6;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: bg-gray-200;
  }
`;

const AccordionTitle = styled.span`
  text-gray-800;
`;

const AccordionIcon = styled.i`
  font-size: 0.8rem;
  color: text-gray-400;
  margin-left: 0.5rem;
  transition: transform 0.2s ease-in-out;

  ${({ active }) =>
    active &&
    `
    transform: rotate(180deg);
    color: text-gray-700;
  `}
`;

const AccordionContent = styled.div`
  padding: py-2 px-6;
  background-color: bg-white;
`;

const AccordionSubItem = styled.div`
  padding: py-2 px-6;
  background-color: bg-gray-200;
`;

const AccordionSubTitle = styled.span`
  text-gray-700;
`;

const AccordionSubIcon = styled.i`
  font-size: 0.6rem;
  color: text-gray-400;
  margin-right: 0.5rem;
`;

function App() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

return (
  <AccordionMenu className="bg-gray-100">
    <AccordionItem className="border-b border-gray-200">
      <AccordionHeader
        onClick={() => toggleAccordion(0)}
        className="flex justify-between items-center py-4 px-6 cursor-pointer"
      >
        <AccordionTitle className="text-gray-800">Menu Item 1</AccordionTitle>
        <AccordionIcon
          active={activeIndex === 0}
          className="fas fa-chevron-down"
        />
      </AccordionHeader>
      {activeIndex === 0 && (
        <>
          <AccordionContent className="py-2 px-6 bg-white">
            Sub Item 1.1
          </AccordionContent>
          <AccordionContent className="py-2 px-6 bg-white">
            Sub Item 1.2
          </AccordionContent>
          <AccordionContent className="py-2 px-6 bg-white">
            Sub Item 1.3
          </AccordionContent>
        </>
      )}
    </AccordionItem>
    <AccordionItem className="border-b border-gray-200">
      <AccordionHeader
        onClick={() => toggleAccordion(1)}
        className="flex justify-between items-center py-4 px-6 cursor-pointer"
      >
        <AccordionTitle className="text-gray-800">Menu Item 2</AccordionTitle>
        <AccordionIcon
          active={activeIndex === 1}
          className="fas fa-chevron-down"
        />
      </AccordionHeader>
      {activeIndex === 1 && (
        <>
          <AccordionContent className="py-2 px-6 bg-white">
            Sub Item 2.1
          </AccordionContent>
          <AccordionContent className="py-2 px-6 bg-white">
            Sub Item 2.2
          </AccordionContent>
          <AccordionContent className="py-2 px-6 bg-white">
            Sub Item 2.3
          </AccordionContent>
        </>
      )}
    </AccordionItem>
    <AccordionItem className="border-b border-gray-200">
      <AccordionHeader
        onClick={() => toggleAccordion(2)}
        className="flex justify-between items-center py-4 px-6 cursor-pointer"
      >
        <AccordionTitle className="text-gray-800">Menu Item 3</AccordionTitle>
        <AccordionIcon
          active={activeIndex === 2}
          className="fas fa-chevron-down"
        />
      </AccordionHeader>
      {activeIndex === 2 && (
        <>
          <AccordionContent className="py-2 px-6 bg-white">
            Sub Item 3.1
          </AccordionContent>
          <AccordionContent className="py-2 px-6 bg-white">
            Sub Item 3.2
          </AccordionContent>
          <AccordionSubItem className="py-2 px-6 bg-gray-200">
            <AccordionSubIcon className="fas fa-circle text-gray-400" />
            <AccordionSubTitle className="text-gray-700">
              Sub Item 3.3
            </AccordionSubTitle>
          </AccordionSubItem>
          <AccordionSubItem className="py-2 px-6 bg-gray-200">
            <AccordionSubIcon className="fas fa-circle text-gray-400" />
            <AccordionSubTitle className="text-gray-700">
              Sub Item 3.4
            </AccordionSubTitle>
          </AccordionSubItem>
        </>
      )}
    </AccordionItem>
  </AccordionMenu>
);

}

export default App;
