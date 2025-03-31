import { Stack } from "@mui/material";
import {memo} from "react";
import { GEAR_STORE } from "../../store/gear-store";
import { ItemCell } from "./ItemCell";

export const ItemTable = memo(()=>{
    return <Stack gap={1}>
        {GEAR_STORE.map(wowItem => {
            return <ItemCell wowItem={wowItem} />
        })}
    </Stack>
})