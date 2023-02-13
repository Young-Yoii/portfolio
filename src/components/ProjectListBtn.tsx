import styled from 'styled-components';

const ListWrapInner = styled.ul`
  li {
    padding: 5px 0px;
  }
`;

interface Props {
  list: any[];
}
const ListButton = ({ list }: Props) => {
  return (
    <ListWrapInner>
      {list.map((item, index) => {
        return (
          <li key={index} className="cursor-pointer">
            {item.title}
          </li>
        );
      })}
    </ListWrapInner>
  );
};

export default ListButton;
