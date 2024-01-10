import styled from "styled-components";
import tags from "./json/tags.json";

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const TagTitulo = styled.h3`
  color: #d9d9d9;
  font-size: 24px;
  margin: 0;
`;

const Tag = styled.button`
  font-size: 24px;
  color: #ffffff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }
`;

const Tags = () => {
  return (
    <>
      <p style={{fontSize:'20px', color:"#fff"}}>Busque por tags:</p>
      <TagsContainer>
        {tags.map((tag) => (
          <Tag key={tag.id}>
            <TagTitulo>{tag.titulo}</TagTitulo>
          </Tag>
        ))}
      </TagsContainer>
    </>
  );
};

export default Tags;
