INSERT INTO users (
    email, 
    first_name, 
    last_name, 
    hash
)
VALUES (
    ${email}, 
    ${first_name}, 
    ${last_name}, 
    ${hash}
)
RETURNING user_id, email, first_name, last_name;
