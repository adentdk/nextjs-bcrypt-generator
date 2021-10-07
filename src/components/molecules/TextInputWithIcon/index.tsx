import { classNames } from '../../../lib/utils/style';
import TextInput from '../../atoms/TextInput';
import { ITextInputWithIconProps } from './interfaces';

export default function TextInputWithIcon({ icon, iconClassName = '', ...props }: ITextInputWithIconProps) {
  return (
    <div className="relative z-0">
      <span className={classNames('absolute inset-y-0 left-0 flex items-center pl-3', iconClassName)}>
        {icon}
      </span>
      <TextInput className="pl-10" {...props} />
    </div>
  );
}
