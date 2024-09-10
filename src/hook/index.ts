import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppSelector } from '@app-store'
import { useDeviceType } from "./useDeviceType";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<AppSelector>()
export {
    useDeviceType
}