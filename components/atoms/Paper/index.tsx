import { classNames } from '../../../utils/style';
import { IPaperProps } from './interface';

export default function Paper({ children, className = '' }: IPaperProps) {
  return (
    <div className={classNames('bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-300', className)}>
      {children}
    </div>
  );
}
