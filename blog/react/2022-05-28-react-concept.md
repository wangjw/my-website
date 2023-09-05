---
slug: react-blog-post
title: react concept
authors:
  name: Gao Wei
  title: Docusaurus Core Team
  url: https://github.com/wgao19
  image_url: https://github.com/wgao19.png
tags: [react]
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

# useCallback
useCallback を使用することにより、依存配列の中身が変わらなかった場合メモ化された関数、つまり再レンダリング前と同一の関数が返るため、この関数を渡している子コンポーネントで props が変化していないとみなされて再レンダリングがスキップされます。


>In other words, useCallback caches a function between re-renders until its dependencies change. Let's walk through an example to see when this is useful.
> 
> 
> 



# reference
[React.memo・useCallback()を整理してみた](https://zenn.dev/masatotezuka/articles/9102b1e260a478#%E9%96%8B%E7%99%BA%E7%92%B0%E5%A2%83])