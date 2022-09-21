module.exports = (post) => `
      <html>
        <head>
          <title>${post.title}</title>
          <link rel='stylesheet' href='/assets/style.css' />
        </head>
        <body>
          <h1>Wizard News Seq</h1>
          <a href='/'>All Posts</a>
          <h2>${post.title} by ${post.user.name}</h2>
          <p>
            ${post.content}
          </p>
        </body>
      </html>
    `