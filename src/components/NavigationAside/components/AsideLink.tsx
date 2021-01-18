import React from 'react';
import { Link } from 'react-router-dom';

interface AsideLinkProps {
  icon?: JSX.Element;
  value?: string;
  path: string;
  active?: number;
  index: number;
}

function AsideLink({ icon, value, path, active, index }: AsideLinkProps) {
  return (
    <div className={index === active ? 'aside__link_active' : 'aside__link'}>
      <div className="aside__link__a">
        <Link to={path}>
          <div className="icon">{icon}</div>
          <p>{value}</p>
        </Link>
      </div>
    </div>
  );
}

export default AsideLink;
