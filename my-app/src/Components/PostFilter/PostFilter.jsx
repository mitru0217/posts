import Select from "../UI/Select/Select";
import Input from "../UI/Input/Input";
import { Wrapper, Title } from "./PostFilter.styled";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <Wrapper>
      <Title>Find the post</Title>
      <Input
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder='search posts'
      />
      <Select
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue='Sort posts by'
        options={[
          { value: "title", name: "Sort by title" },
          { value: "body", name: "Sort by text" },
        ]}
      />
    </Wrapper>
  );
};

export default PostFilter;
