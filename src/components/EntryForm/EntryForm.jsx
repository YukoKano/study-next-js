export const EntryForm = () => {
  return (
    <form action="post">
      <dl>
        <dt>
          <label htmlFor="name">お名前</label>
        </dt>
        <dd>
          <input type="text" name="name" id="name" placeholder="田中太郎" required></input>
        </dd>
        <dt>
          <label htmlFor="email">メールアドレス</label>
        </dt>
        <dd>
          <input type="email" name="email" id="email" placeholder="abcdef@email.co.jp" required></input>
        </dd>
        <dt>
          <label htmlFor="content">連絡内容</label>
        </dt>
        <dd>
          <textarea name="textarea" id="content" required></textarea>
        </dd>
      </dl>
      <input type="submit" value="リクエストを送信" />
    </form>
  )
}