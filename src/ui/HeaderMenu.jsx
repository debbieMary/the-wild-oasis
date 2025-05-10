import React from 'react'
import styled from 'styled-components'
import Logout from '../features/authentication/Logout';
import { HiOutlineUser } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import ButtonIcon from "../ui/ButtonIcon"
import DarkModeToogle from './DarkModeToogle';

const StyledHeaderMenu = styled.ul`
display: flex;
gap: 0.4rem;
`;

export default function HeaderMenu() {

    const navigate = useNavigate();
   
  return (
    <StyledHeaderMenu>
      <li><DarkModeToogle/></li>
        <li>
            <ButtonIcon>
                <HiOutlineUser onClick={()=>navigate("/account")}/>
            </ButtonIcon>
        </li>
        <li><Logout/></li>
    </StyledHeaderMenu>
  )
}
