import styled from "styled-components";

const ListItemWrapper = styled.div`
  margin: 1.5em;

  strong {
    color: #539bf5;
    font-size: 1.5em;
  }

  p {
    color: #999999;
    margin: 1.5em 0;
  }
`;

export const ListItem = ({ title, description }) => {
  return (
    <ListItemWrapper>
      <strong>{title}</strong>
      <p>{description}</p>
      <hr />
    </ListItemWrapper>
  );
};
