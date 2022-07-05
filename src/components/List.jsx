import React from 'react'

const List = (props) => {
  const { people } = props

  return (
    <div>
      {people.map((person) => {
        const { id, name, age, image } = person
        // console.log('person', id, name, age, image)
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        )
      })}
    </div>
  ) // people - array
}

export default List

// destructuring - array ni ichida malumotlarni tashqariga chiqarish
// .map() return qilishi shart
