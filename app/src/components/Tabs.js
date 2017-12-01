import React from 'react';
import { Nav, NavItem,NavLink } from 'reactstrap';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      isActive:false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Nav tabs >
          <NavItem>
            <NavLink active={this.isActive} name="pizza" href="/pizza">Пица и ...</NavLink>
          </NavItem>
          <NavItem>
            <NavLink active={this.isActive} name="salad" href="#">Салати</NavLink>
          </NavItem>
          <NavItem>
            <NavLink active={this.isActive} name="starters" href="#">Студени предястия и добавки</NavLink>
          </NavItem>
          <NavItem>
            <NavLink active={this.isActive} name="bread" href="#">Насъшния</NavLink>
          </NavItem>
                    <NavItem>
            <NavLink active={this.isActive}  name="vegi" href="#">Без месо</NavLink>
          </NavItem>
                    <NavItem>
            <NavLink active={this.isActive}  name="chicken" href="#">Всичко с Пиле</NavLink>
          </NavItem>
                    <NavItem>
            <NavLink active={this.isActive} name="pork" href="#">Само със Свинско месо</NavLink>
          </NavItem>
                    <NavItem>
            <NavLink active={this.isActive} name="veal" href="#">С Телешко месо</NavLink>
          </NavItem>
                              <NavItem>
            <NavLink active={this.isActive} name="lamb" href="#">С Агнешко месо</NavLink>
          </NavItem>
                    <NavItem>
            <NavLink active={this.isActive} name="fish" href="#">Рибата при нас</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}