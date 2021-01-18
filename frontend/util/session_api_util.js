export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);

export const fetchUsers = () => {
  return $.ajax({
    method: 'GET', 
    url: '/api/users'
  })
}

export const fetchUser = id => {
  return $.ajax({
    method: 'get', 
    url: `/api/users/${id}`
  })
}

export const updateUser = user => {
  return $.ajax({
    method: 'patch', 
    url: `/api/users/${user.id}`,
    data: {user}
  })
}