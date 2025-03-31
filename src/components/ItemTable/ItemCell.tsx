import {memo} from "react";
import { TWowItem } from "../../types/items";
import { Stack } from "@mui/material";

type TItemCellProps={
    wowItem:TWowItem
}

export const ItemCell=memo(({wowItem}: TItemCellProps)=>{
    return <Stack>
        {wowItem.name}
    </Stack>
})