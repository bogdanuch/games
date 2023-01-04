import React, {ReactElement, memo} from 'react';
import {Select, MenuItem, InputLabel, FormControl} from "@mui/material";
import {TGameProvider} from "../../contexts/useGameList.d";

function Filter({label, updateFunction, valueList}:
                    {
                        label: string,
                        updateFunction: (string: string) => void,
                        valueList: TGameProvider[]
                    }):
    ReactElement {
    return (
        <FormControl>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={''}
                label={label}
                onChange={(event) => {
                    updateFunction(event.target.value)
                }}
            >
                <MenuItem value="" key='none-option'>
                    <em>None</em>
                </MenuItem>
                {valueList.map((value) => (
                    <MenuItem value={value.id} key={value.id}>
                        <em>{value.title}</em>
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default memo(Filter);