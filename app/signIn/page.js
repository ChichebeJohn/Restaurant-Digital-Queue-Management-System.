"use client"; // This makes the component a Client Component

import Head from 'next/head';

export default function SignIn() {
  const handleViewMenu = () => {
    window.location.href = '/menu';
  };

  return (
    <>
      <Head>
        <title>Sign In</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="signin">
        <div className="wrapper">
          <div className="left-border"></div>
          <div className="content">
            <p>To Continue please input a valid email address.</p>

            <form action="/submit-email" method="POST" className="email-form">
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </form>

            <div className="image-container-2">
              <img src="/menu.png" alt="Menu" />
            </div>
          </div>
          <div className="right-border"></div>
        </div>

        <button className="view-menu-btn" onClick={handleViewMenu}>
          View Menu
        </button>
      </div>
    </>
  );
}
