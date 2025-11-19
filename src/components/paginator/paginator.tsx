import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import type { ChangeEvent } from 'react';
type props = {
    totalPage:number,
    handleNextPage:(a: ChangeEvent<unknown>, value: number)=>void

}
export const Paginator = ({totalPage,handleNextPage}:props)=>{
    return(
        <Stack  spacing={1}>
            <Pagination
             count={totalPage}
                onChange={handleNextPage} shape="rounded"
            />
        </Stack>
    )
}