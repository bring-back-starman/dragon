import React from 'react';

function getItemKey(item, keyPath) {
  if (typeof item === 'string') {
    return item;
  }

  if (typeof item === 'object') {
    return item[keyPath];
  }

  return null;
}

const List = ({ items, component: Component, keyPath, wrapper }) => {
  if (!items || (Array.isArray(items) && !items.length)) {
    return null;
  }

  const Wrapper = wrapper || React.Fragment;

  return (
    <Wrapper>
      {items.map(item => (
        <Component item={item} key={getItemKey(item, keyPath)} />
      ))}
    </Wrapper>
  );
};

export default List;
