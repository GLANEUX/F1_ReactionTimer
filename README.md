# F1_ReactionTimer


## Models :

### Users
- email: required, unique
- password: required
- role:  boolean (0=admin, 1=user)

### Timer
- user_id: foreign key of document id of the user
- time: required in ms

### Routes
- /users/user_id: protected (PUT, PATCH, DELETE)
- /users/register: return user email only (POST)
- /users/login: return auth token (POST)
- /:user_id/timer: PROTECTED route to store user time (POST)

### Obligations
- GithubFlow
- .env
- hash for password