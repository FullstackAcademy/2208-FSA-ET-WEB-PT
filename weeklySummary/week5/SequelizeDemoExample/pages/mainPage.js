module.exports = (users, posts) => `
      <html>
        <head>
          <title>Wizard News Seq</title>
          <link rel='stylesheet' href='/assets/style.css' />
        </head>
        <body>
          <h1>Wizard News Seq</h1>
          <form method='POST' action='/posts'>
            <input name='title' placeholder='title' />
            <br />
            <textarea name='content' placeholder='content'></textarea>
            <br />
            <select name='userId'>
              <option>-- author --</option>
              ${users.map(user => `
                    <option value='${user.id}'>${user.name}</option>
                `).join('')}
            </select>
            <br />
            <button>Create</button>
          </form>
          <ul>
            
          ${posts.map(post => `
                <li>
                  <a href='/posts/${post.id}'>${post.title}</a> by ${post.user.name}
                </li>
            `).join('')}
          </ul>
          
        </body>
      </html>
    `;