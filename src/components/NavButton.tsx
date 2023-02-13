import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavItem = styled(Link)`
  color: #000;
  border: none;
  margin-right: 20px;
  font-size: 2rem;
  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

interface Props {
  title: string;
  link: string;
}
const NavButton = ({ title, link }: Props) => {
  return (
    <NavItem to={link} className="cursor-pointer">
      {title}
    </NavItem>
  );
};

export default NavButton;
