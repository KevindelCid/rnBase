import { Text } from "react-native";
import { styled } from "nativewind";


const baseThemeColorText = "text-black dark:text-slate-200"


export const BText = styled(Text, baseThemeColorText);
export const BLTitleText = styled(Text, `${baseThemeColorText} text-xl`)
export const BXLTitleText = styled(Text, `${baseThemeColorText} text-3xl`)

