// src/components/Search.js
import { DocSearch } from '@docsearch/react';
import '@docsearch/css';

export function Search() {
  return (
    <DocSearch
      appId="3AMRTH6JZO"
      indexName="jkt48connect-my"
      apiKey="058c3ce636f12da1ef7c94158a46223d"
    />
  );
}
