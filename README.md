# :racing_car: F1_ReactionTimer


## :bar_chart: Models

### Users :busts_in_silhouette:
* `email`: required, unique (Checkout if it's a real e-mail)
* `password`: required
* `role`:  boolean (0=admin, 1=user)

### Timer :stopwatch:
* `user_id`: foreign key of document id of the user
* `time`: required in ms

### :vertical_traffic_light: Routes 
* `/users/user_id`: PROTECTED (DELETE, PUT PROTECTED by token of the user)
* `/users/register`: return user email only (POST)
* `/users/login`: return auth token (POST)
* `/:user_id/timer`: PROTECTED route to store user time (POST)
* `/:user_id/timer`: PROTECTED route to get all user time (GET)
* `/:user_id/timer/avg`: PROTECTED route to return average user time (GET)

### :clipboard: Obligations
* :arrows_counterclockwise:	 GithubFlow
* :key: `.env` for environment variables
* :lock: hash for password  security & secure password
