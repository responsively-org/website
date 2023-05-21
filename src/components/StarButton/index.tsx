import {Icon} from '@iconify/react';
import {NavLink} from '../NavLink';

export const StarButton = () => {
  console.log('StarButton');
  return (
    <div className="group hidden md:block">
      <NavLink
        href="https://github.com/responsively-org/responsively-app/stargazers"
        target="_blank"
      >
        <span className="flex items-center">
          <Icon
            icon="material-symbols:star-outline-rounded"
            fontSize={22}
            className="transition-transform duration-300 group-hover:scale-125"
          />{' '}
          {'  '}19,885 Stars
        </span>
      </NavLink>
    </div>
  );
};
