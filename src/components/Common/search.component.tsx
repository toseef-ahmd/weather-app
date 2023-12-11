// src/components/Header.tsx
import React from "react"
import { MockCities } from "../../utils/cities.mock"
import Select from "react-select"

type SearchProps = {
  data: typeof MockCities
  selectedCity: (city: (typeof MockCities)[0]) => void
}

const Search: React.FC<SearchProps> = ({ data, selectedCity }) => {
  const onSelected = (event: { value: any }) => {
    const value = event.value
    if (value) {
      selectedCity(value)
    }
  }

  const options = data.map((city) => ({
    label: city.name,
    value: city.location,
  }))

  return (
    <div>
      <Select
        options={options}
        defaultValue={options[0]}
        onChange={onSelected}
      />
    </div>
  )
}

export default Search
