import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { removeToDoItem } from '../actions';

const RemoveButtonContainer = styled.div`
  float: right;
`;

export class ToDo extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  removeItem = () => {
    this.props.removeToDoItem(this.props._id);
  };

  render() {
    return (
      <ListGroup.Item>
        {this.props.title}
        <RemoveButtonContainer>
          <Button variant="light" onClick={this.removeItem}>
            Remove
          </Button>
        </RemoveButtonContainer>
      </ListGroup.Item>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  removeToDoItem: id => dispatch(removeToDoItem(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDo);
