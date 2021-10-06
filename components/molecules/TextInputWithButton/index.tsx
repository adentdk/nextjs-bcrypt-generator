import Button from '../../atoms/Button';
import TextInput from '../../atoms/TextInput';
import { ITextInputWithButtonProps } from './interfaces';

export default function TextInputWithButton({
  buttonProps, ...props
}: ITextInputWithButtonProps) {
  return (
    <div className="relative z-0">
      <TextInput {...props} />
      <Button {...buttonProps} />
    </div>
  );
}
