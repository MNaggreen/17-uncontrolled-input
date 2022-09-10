function Login() {
  function handleFormSubmit(event) {
    event.preventDefault() // прервать переход при нажатии login кнопки
    
    const userData = { //прочитать значения логина и пароля которые мы дали как свойства в input
      username: event.target.username.value,
      password: event.target.password.value,
    }
    
    // вывод в консоль пароля и имя пользователя
    console.log(userData)
    alert(JSON.stringify(userData))//конвертирование текста в строку для корректного отображения текста в нашем уведомления о принятии пароля js в json
  }
  return (//принажатии на кнопку выполняться определенные действия onSubmit
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login


/* console.log({
      username: event.target.username.value,
      password: event.target.password.value
    }) */

/* console.log(event.target.username.value) // показать в консоле имя пользователя
    console.log(event.target.password.value) */