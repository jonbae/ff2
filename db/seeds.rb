User.delete_all
Exercise.delete_all
Performance.delete_all
Day.delete_all
DayExercise.delete_all
DayPerformance.delete_all

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

u4 = User.create!(
  username: 'jonathan', 
  password: 'password', 
  trainer_id: u1.id
)

u5 = User.create!(
  username: 'alex', 
  password: 'password', 
  trainer_id: u1.id
)

u6 = User.create!(
  username: 'richie', 
  password: 'password', 
  trainer_id: u1.id
)

u7 = User.create!(
  username: 'kaiter', 
  password: 'password', 
  trainer_id: u1.id
)

squat = Exercise.create!( {name: 'squat', description: 'bend those legs', user_id: u1.id, } )
deadlift = Exercise.create!( {name: 'deadlift', description: 'lift the dead', user_id: u1.id, } )
bench_press = Exercise.create!( {name: 'bench press', description: 'press the bench', user_id: u1.id, } )

p1 = Performance.create!( {weight: 30, rest_time: 39, repetitions: 10, sets: 3, exercise_id: squat.id, user_id: u2.id, active: true} )
p2 = Performance.create!( {weight: 50, rest_time: 89, repetitions: 15, sets: 4, exercise_id: squat.id, user_id: u2.id} )
p3 = Performance.create!( {weight: 30, rest_time: 39, repetitions: 38, sets: 38, exercise_id: bench_press.id, user_id: u2.id, active: true})


d1 = Day.create!( {name: 'push day', user_id: u2.id})
d2 = Day.create!( {name: 'pull day', user_id: u2.id})


de1 = DayExercise.create!( {day_id: d1.id, exercise_id: bench_press.id})
de2 = DayExercise.create!( {day_id: d2.id, exercise_id: squat.id})
de3 = DayExercise.create!( {day_id: d1.id, exercise_id: squat.id})
de4 = DayExercise.create!( {day_id: d1.id, exercise_id: deadlift.id})



dp1 = DayPerformance.create!( {day_id: d1.id, performance_id: p3.id})
dp2 = DayPerformance.create!( {day_id: d2.id, performance_id: p2.id})
dp3 = DayPerformance.create!( {day_id: d1.id, performance_id: p2.id})
dp4 = DayPerformance.create!( {day_id: d1.id, performance_id: p1.id})

