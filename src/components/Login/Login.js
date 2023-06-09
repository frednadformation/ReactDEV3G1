import React from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'


function Login() {
  return (
    <React.Fragment>
    
    {/* <h1>Login : </h1>
    <form action="http://localhost:5000/api/login" method="post">
        <label for="">Username</label>
        <input type="text" name="username" />

        <label for="">Password</label>
        <input type="password" name="password" />

        <input type="submit" value="Connexion" />
    </form> */}

    <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form action="http://localhost:5000/api/login" method="post">
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Username'
            placeholder='Username'
            name="username"
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
            name="password"
          />

          <Button content='Login' primary />
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Button content='Sign up' icon='signup' size='big' href="/inscription" />
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>

    </React.Fragment>
  )
}

export default Login