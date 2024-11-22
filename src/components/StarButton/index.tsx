import { Icon } from '@iconify/react';
import { NavLink } from '../NavLink';
import { useEffect, useState } from 'react';

export const StarButton = () => {
  const [count, setCount] = useState<number>(20400);

  useEffect(() => {
    // get start count from github api for responsively-org/responsively-app repo
    fetch('https://api.github.com/repos/responsively-org/responsively-app')
      .then(response => response.json())
      .then(data => {
        // If the rate limit is exceeded, verify that no counts are returned
        if (data.stargazers_count) {
          setCount(data.stargazers_count);
        }
      })
      .catch(error => {
        console.error('Error while getting the star count:', error);
      });
  }, []);

  return (
    <div className="group hidden md:block">
      <NavLink
        href="https://github.com/responsively-org/responsively-app/stargazers"
        target="_blank"
      >
        <span className="flex items-center gap-1">
          <Icon
            icon="material-symbols:star-outline-rounded"
            fontSize={22}
            className="origin-center transition-transform duration-300 group-hover:scale-125"
          />
          {count.toLocaleString()} Stars
        </span>
      </NavLink>
      <NavLink
        href="/download"
      >
        <span className="flex items-center gap-1">
          <Icon
            icon="material-symbols:cloud-download-outline-rounded"
            fontSize={22}
            className="origin-center transition-transform duration-300 group-hover:scale-125"
          />
          150k+ Downloads
        </span>
      </NavLink>
    </div>
  );
};
