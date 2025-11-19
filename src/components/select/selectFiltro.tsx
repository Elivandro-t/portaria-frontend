import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
type props = {
    value: any,
    onChange: (n: any) => void;
    list: any[],
    titulo: any
}
export default function SelectVariants({ value, onChange, list, titulo }: props) {

    const handleChange = (event: SelectChangeEvent) => {
        onChange(event.target.value);
    };

    return (
        <div>
            <FormControl sx={{ m: 0, minWidth: 120, }}>
                <InputLabel id="demo-simple-select-standard-label"
                    sx={{ fontSize: 13, top: -10 }} >{titulo}</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={value}
                    onChange={handleChange}
                    sx={{
                        height: 30,
                        fontSize: 13,
                        ".MuiSelect-select": { paddingTop: 4, paddingBottom: 4 } // reduz espaço interno
                    }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {list.map((ItemsRow, index) => (
                        <MenuItem key={index}
                            value={ItemsRow.value !== undefined ? ItemsRow.value : ItemsRow.numeroFilial}
                        >{ItemsRow?.nome}</MenuItem>
                    ))}

                </Select>
            </FormControl>
        </div>
    );
}