
User.delete_all
Exercise.delete_all
Performance.delete_all

u1 = User.create!(
  username: 'guest',
  password: 'password'
)

u2 = User.create!(
  username: 'username',
  password: 'password',
  trainer_id: u1.id
)

u3 = User.create!(
  username: 'mahim', 
  password: 'password', 
  trainer_id: u1.id
)

squat = Exercise.create!( {name: 'squat', description: 'bend those legs', user_id: u1.id, } )
deadlift = Exercise.create!( {name: 'deadlift', description: 'lift the dead', user_id: u1.id, } )
bench_press = Exercise.create!( {name: 'bench_press', description: 'press the bench', user_id: u1.id, } )

p1 = Performance.create!( {weight: 30, rest_time: 39, repetitions: 10, sets: 3, exercise_id: squat.id, user_id: u2.id, active: true} )
p2 = Performance.create!( {weight: 50, rest_time: 89, repetitions: 15, sets: 4, exercise_id: squat.id, user_id: u2.id} )