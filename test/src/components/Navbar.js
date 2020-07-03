import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { backgrounds, primary } from "@uprise/colors";
import { Medium } from "@uprise/text";
import { Card } from "@uprise/card";
import { spacing } from "@uprise/spacing";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions/user";

const StyledCard = styled(Card)`
  overflow: inherit;
`;

const DropDown = styled.div`
  position: absolute;
  transform: translate3d(0px, 38px, 0px);
  top: 12px;
  left: 0px;
  will-change: transform;
  z-index: 1000;
  display: ${({ show }) => (show ? "block" : "none")};
  float: left;
  overflow: hidden;
  min-width: 10rem;
  padding: 0;
  margin: 0;
  font-size: 1rem;
  color: ${primary.charcoal};
  text-align: left;
  list-style: none;
  background-color: ${backgrounds.white};
  background-clip: padding-box;
  border: 0px;
  border-radius: 0.15rem;
  box-shadow: 0 4px 10px 0 rgba(219, 221, 227, 0.5);
`;

const DropDownItem = styled(Link)`
  display: block;
  width: 100%;
  padding: 0.75rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: ${primary.charcoal};
  background-color: ${primary.purple};
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  text-decoration: none;
  &:hover {
    background-color: ${primary.purple};
    color: ${backgrounds.white};
  }
`;

const DropDownButton = styled.button`
  border: 0px;
  padding: 0;
  margin: 0;
  background-color: ${backgrounds.white};
  outline: none;
  cursor: pointer;
  color: ${({ active }) => (active ? primary.purple : primary.charcoal)};
  &:hover {
    color: ${primary.purple};
  }
`;

const NavLink = styled(Link)`
  color: ${primary.charcoal};
  text-decoration: none;
  font: 400 13.3333px Arial;
  &:hover {
    color: ${primary.purple};
  }
`;

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [limit, setLimit] = useState(1);

  const { top_artists } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    if (!show) {
      if (10 * limit < top_artists.length) {
        setLimit(limit + 1);
      }
    }
  }, [show, limit, top_artists]);

  const logout = () => {
    dispatch(actions.logout());
    history.push('/login');
  };

  return (
    <StyledCard
      shadow
      backgroundColor={backgrounds.white}
      className="d-flex px-5 py-4"
      padding={`0 ${spacing.s5}`}
    >
      <Medium className="pr-5">
        <NavLink to="/overview">Overview</NavLink>
      </Medium>
      <Medium className="pr-5">
        <NavLink to="/playlist">Playlist</NavLink>
      </Medium>
      {top_artists.length && (
        <div className="pr-5 relative">
          <Medium>
            <DropDownButton active={show} onClick={() => setShow(!show)}>
              Featured
            </DropDownButton>
          </Medium>
          <DropDown show={show}>
            {top_artists.slice(10 * (limit - 1), 10 * limit).map((x) => (
              <DropDownItem
                key={x.id}
                to={`/overview?id=${x.id}`}
                onClick={() => setShow(false)}
              >
                {x.name}
              </DropDownItem>
            ))}
          </DropDown>
        </div>
      )}
      <Medium className="pr-5">
        <DropDownButton onClick={logout}>Logout</DropDownButton>
      </Medium>
    </StyledCard>
  );
}
