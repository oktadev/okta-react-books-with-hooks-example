import React from 'react';

import { useOktaAuth } from '@okta/okta-react';

export function Home() {
  const { authState, authService } = useOktaAuth();

  const login = () => { authService.login('/'); }

  const userText = authState.isAuthenticated
    ? <p>You are signed in!</p>
    : <div><p>You need to sign in to use the application!</p><button onClick={ login }>Sign In</button></div>;

  return <div className="page-home"><h1>Welcome to Books with Hooks</h1>{ userText }</div>;
}
