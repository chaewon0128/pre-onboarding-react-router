
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
export function Router({children}) {
    return (
        <div>
            {children}
        </div>
    );
}

export function Route({path, component}) {

    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    
    useEffect(() => {
        const onLocationChange = () => {
          setCurrentPath(window.location.pathname);
        };
    
        window.addEventListener("popstate", onLocationChange);
    
        return () => {
          window.removeEventListener("popstate", onLocationChange);
        };
      });
    
      return currentPath === path ? <>{component}</> : null;
    }


Router.propTypes = {
    children: PropTypes.node
}

Route.propTypes = {
    path : PropTypes.string, 
    component: PropTypes.node
}