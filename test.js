'use strict';
const pug = require('pug');
const assert = require('assert');

// pug のテンプレートにおける XSS 脆弱性のテスト
const html = pug.renderFile('./views/page.pug', {
  posts: [
    {
      id: 1,
      cat: "<script>alert('test');</script>",
      content: "<script>alert('test');</script>",
      postedBy: 'guest1',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],
  user: 'guest1'
});

// スクリプトタグがエスケープされて含まれていることをチェック
assert(html.includes("&lt;script&gt;alert('test');&lt;/script&gt;"));
console.log('テストが正常に完了しました');