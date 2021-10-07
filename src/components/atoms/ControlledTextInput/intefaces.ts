import { UseControllerProps } from "react-hook-form";
import { ITextInputProps } from "../TextInput/interfaces";

export interface IControlledTextInputProps extends UseControllerProps {
  textInputProps: ITextInputProps
  control: any
}