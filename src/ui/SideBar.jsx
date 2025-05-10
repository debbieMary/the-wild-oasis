import React from 'react'
import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../../src/data/Uploader";

export default function SideBar() {
    const StyledSideBar = styled.aside`
    background-color: var(--color-grey-0);
    padding: 3.2rem 4.8rem;
    border-right: 1px solid var(--color-grey-100);
    grid-row: 1 / -1;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    `;
  return (
    <StyledSideBar>
        <Logo/>
        <MainNav/>
        <Uploader/>
    </StyledSideBar>
  )
}
