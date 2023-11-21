const menu = [
  {
    value: 'curyy',
    name: 'カレー'
  },
  {
    value: 'stew',
    name: 'シチュー'
  }
]
const ingredients = [
  {
    makerName: 'curry', // まだ使ってない
    value: 'onion',
    name: '玉ねぎ'
  },
  {
    makerName: 'curry',
    value: 'carrot',
    name: 'にんじん'
  }
]

const years = [
  {
    value: '2022',
    name: '2022'
  },
  {
    value: '2023',
    name: '2023'
  },
]

const elapsedTimes = [
  {
    value: '5',
    name: '5分'
  },
  {
    value: '10',
    name: '10分'
  },
  {
    value: '15',
    name: '15分'
  },
]

const Label = ({ name, id }) => {
  return (
    <dt>
      <label htmlFor={id}>{ name }</label>
    </dt>
  )
}

const SelectBox = ({ id }) => {
  let options = []

  if (id === "menu") {
    options = menu.map((item) => <option key={item.value} value={item.value}>{ item.name }</option>)
  } else if (id === "ingredients") {
    options = ingredients.map((ingredient) => <option key={ingredient.value} value={ingredient.value}>{ ingredient.name }</option>)
  } else if (id === "year") {
    options = years.map((year) => <option key={year.value} value={year.value}>{ year.name }</option>)
  } else if (id === "elapsedTimes") {
    options = elapsedTimes.map((time) => <option key={time.value} value={time.value}>{ time.name }</option>)
  }

  return (
    <dd>
      <select name={ id } id={ id } required>
        <option value=''>選択してください</option>
        { options }
      </select>
    </dd>
  )
}

const LabelAndSelectBox = ({ name, id }) => {
  return (
    <>
      <Label name={name} id={ id } />
      <SelectBox id={ id } />
    </>
  )
}

const SelectBoxes = ({ children }) => {
  return (
    <dl>
      { children }
    </dl>
  )
}

export const AppraisalEntryForm = () => {
  return (
    <form>
      <SelectBoxes>
        <LabelAndSelectBox name="メニュー名" id="menu" />
        <LabelAndSelectBox name="材料" id="ingredients" />
        <LabelAndSelectBox name="年式" id="year" />
        <LabelAndSelectBox name="経過時間" id="elapsedTimes" />
      </SelectBoxes>
      <button>次へ</button>
    </form>
  )
}