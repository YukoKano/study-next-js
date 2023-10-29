export const AppraisalEntryForm = () => {
  return (
    <form>
      <dl>
        <dt>
          <label htmlFor="maker">メーカー名</label>
        </dt>
        <dd>
          <select name="maker" id="maker" required>
            <option value=''>選択してください</option>
            <option value='toyota'>トヨタ</option>
            <option value='nissan'>日産</option>
          </select>
        </dd>
        <dt>
          <label htmlFor="car">車種名</label>
        </dt>
        <dd>
          <select name="car" id="car" required>
            <option value=''>選択してください</option>
            <option value='toyota'>プリウス</option>
            <option value='nissan'>ハリアー</option>
          </select>
        </dd>
        <dt>
          <label htmlFor="year">年式</label>
        </dt>
        <dd>
          <select name="year" id="year" required>
            <option value=''>選択してください</option>
            <option value='2023'>2023年</option>
            <option value='2022'>2022年</option>
          </select>
        </dd>
        <dt>
          <label htmlFor="mileage">走行距離</label>
        </dt>
        <dd>
          <select name="mileage" id="mileage" required>
            <option value=''>選択してください</option>
            <option value='under5'>5万km未満</option>
            <option value='5'>5万km以上</option>
            <option value='10'>10万km以上</option>
          </select>
        </dd>
        <button>次へ</button>
      </dl>
    </form>
  )
}