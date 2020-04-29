import React from 'react'
import Select from 'react-select'
import { Flex, Box } from 'rebass'
import { Label } from '@rebass/forms'

const destinationTypes = [
  { value: 'castle', label: 'Castle' },
  { value: 'town', label: 'Town' },
  { value: 'keep', label: 'Keep' },
  { value: 'village', label: 'Village' },
  { value: 'city', label: 'City' },
  { value: 'landmark', label: 'Landmark' },
  { value: 'holdfast', label: 'Holdfast' },
  { value: 'ruin', label: 'Ruin' },
  { value: 'tower', label: 'Tower' },
  { value: 'miscellaneous', label: 'Miscellaneous' },
]

const destinationStatuses = [
  { value: 'completed', label: 'Completed' },
  { value: 'inProgress', label: 'In Progress' },
  { value: 'notStarted', label: 'Not Started' },
  { value: 'abandoned', label: 'Abandoned' },
  { value: 'redoInProgress', label: 'Redo In Progress' },
]

export const RegionFilters = ({ onTypeChange, onStatusChange }) => (
  <Flex flexDirection="row" className="region-filters" mt={6}>
    <Box width={[1/2, 200]}>
      <Label htmlFor="type">Type: </Label>
      <Select
        name="type"
        isClearable
        options={destinationTypes}
        className="custom-select type"
        onChange={onTypeChange}
      />
    </Box>
    <Box width={[1/2, 200]} ml={6}>
      <Label htmlFor="status">Status: </Label>
      <Select
        name="status"
        isClearable
        options={destinationStatuses}
        className="custom-select status"
        onChange={onStatusChange}
      />
    </Box>
  </Flex>
)
