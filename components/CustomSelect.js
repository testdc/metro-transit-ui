import React from 'react';

const CustomSelect = ({ data, defaultText, handleChange, selectValue }) => (
  <FormControl className={classes.formControl}>
    <Select
      displayEmpty
      labelId="route-label"
      id="route-select"
      value={selectValue}
      onChange={handleChange}
      input={<Input />}
    >
      <MenuItem disabled value="">
        <em>{defaultText}</em>
      </MenuItem>
      {data && data.map((item) =>
        <MenuItem key={item.route_id} value={item.route_id}> {item.route_label} </MenuItem>
      )}
    </Select>
  </FormControl>
);

export default CustomSelect;