// src/components/Header.tsx
import React from "react"
import { MockCities } from "../../utils/cities.mock"
import Select, { ActionMeta, SingleValue } from "react-select"

type SearchProps = {
  data: typeof MockCities
  selectedCity: (city: {lat : number, lon : number}) => void
}

const Search: React.FC<SearchProps> = ({ data, selectedCity }) => {
  // const onSelected = (event: { value: any }) => {
  //   const value = event.value
  //   if (value) {
  //     selectedCity(value)
  //   }
  // }

  const onSelected = (
    newValue: SingleValue<{ label: string; value: { lat: number; lon: number; }; }>
  ) => {
    if (newValue) {
      selectedCity(newValue.value)
    } else {
      // Handle the case where newValue is null
      console.log("Selection cleared");
    }
  };

  
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
