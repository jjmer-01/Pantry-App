INSERT INTO users (
    email, 
    first_name, 
    last_name, 
    hash,
    username
)
VALUES (
    ${email}, 
    ${first_name}, 
    ${last_name}, 
    ${hash},
    ${username}
)
RETURNING user_id, email, username, first_name, last_name;
