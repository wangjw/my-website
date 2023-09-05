---
slug: react
title: template
authors: [slorber, yangshun]
tags: [react]
---


## 複数のリクエスト




```tsx

// fetch.ts
import React from "react";
import Fetch from "./Fetch";
import UserRepositories from "./UserRepositories";


// 上記のリクエストにより取得されたユーザー情報は UserDetails コンポーネントにより描画
// されます。その際に子コンポーネント UserRepositories により、2 番目の fetch が実行され
export default function GitHubUser({ login }) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      renderSuccess={UserDetails}
    />
  );
}

function UserDetails({ data }) {
  return (
    <div className="githubUser">
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>

{/* リクエストが成功すると、取得したリポジトリのリスト */}
{/*を RepoMenu を使って表示します。ユーザーがボタンを操作して別のリポジトリを選択した場合、 */}
{/*onSelect プロパティ経由で上位のコンポーネントに通知しています。*/}

      <UserRepositories
        login={data.login}
        onSelect={repoName => console.log(`${repoName} selected`)}
      />
    </div>
  );
}




```


```tsx
// UserRepositories.js
export default function UserRepositories({ login, onSelect = f => f }) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}/repos`}
      renderSuccess={({ data }) => (
        <RepoMenu
          repositories={data}
          onSelect={onSelect}
        />
      )}
    />
  );
}

```
