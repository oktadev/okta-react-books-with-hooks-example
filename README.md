# A React Hooks Example
 
This example app shows how to create a React app with hooks and functional components.

Please read [Build a Simple React Application Using Hooks](https://developer.okta.com/blog/2020/08/26/react-hooks) to see how this app was created.

**Prerequisites:** 

* [Node 12+](https://nodejs.org/en/) installed
* An [Okta Developer Account](https://developer.okta.com/signup)

> [Okta](https://developer.okta.com/) has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure. Okta's intuitive API and expert support make it easy for developers to authenticate, manage and secure users and roles in any application.

* [Getting Started](#getting-started)
* [Links](#links)
* [Help](#help)
* [License](#license)

## Getting Started

To install this example application, run the following commands:

```bash
git clone https://github.com/oktadeveloper/okta-react-books-with-hooks-example.git
cd okta-react-books-with-hooks-example
npm install
```

### Create an OIDC App on Okta

Register a new application by going to **Applications** > **Add Application**. On the next screen, choose **Single Page App** and click **Next**.

On the following screen, you can edit the application's settings. Make sure that the port number is 3000 and the base URI is `http://localhost:3000/`. Change the Login Redirect URI to `http://localhost:3000/callback`. Once you are done, you will see a **Client ID**.

### Configure your Okta Settings

Copy your Okta domain and client ID into `src/App.js`:

```jsx
<div className="App">
  <Router>
    <header>
      <div>Books with Hooks</div>
      <ul className="menu"><li><Link to="/">Home</Link></li><li><Link to="/search">Search</Link></li></ul>
    </header>
    <Security issuer='https://{YourOktaDomain}/oauth2/default'
              clientId='{ClientId}'
              redirectUri={window.location.origin + '/callback'}
              pkce={true}>
      <Route path='/' exact={true} component={Home}/>
      <SecureRoute path='/search' exact={true} component={Search}/>
      <Route path='/callback' component={LoginCallback}/>
    </Security>
  </Router>
</div>
```

Start everything with `npm start` and you'll be able to sign in with Okta!

## Links

This example uses the following open source libraries:

* [React](https://reactjs.org/)
* [Okta React SDK](https://github.com/okta/okta-oidc-js/tree/master/packages/okta-react)

## Help

Please post any questions [on the blog post](https://developer.okta.com/blog/2020/08/26/react-hooks), as issues in this repository, or on our [Okta Developer Forums](https://devforum.okta.com/). We also monitor Stack Overflow for questions tagged with `okta`. 

## License

Apache 2.0, see [LICENSE](LICENSE).
